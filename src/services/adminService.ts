import { supabase } from '@/integrations/supabase/client';

export interface UserRole {
  id: string;
  user_id: string;
  role: string;
  created_at: string;
  created_by?: string;
}

export interface ContentPage {
  id: string;
  slug: string;
  title: string;
  meta_title?: string;
  meta_description?: string;
  status: string;
  publish_at?: string;
  content: any;
  created_at: string;
  updated_at: string;
  created_by?: string;
  updated_by?: string;
}

export interface MediaItem {
  id: string;
  filename: string;
  original_filename: string;
  file_size: number;
  mime_type: string;
  url: string;
  alt_text?: string;
  caption?: string;
  tags: string[];
  created_at: string;
  created_by?: string;
}

export interface AuditLog {
  id: string;
  table_name: string;
  record_id: string;
  action: string;
  old_values?: any;
  new_values?: any;
  user_id?: string;
  created_at: string;
}

export class AdminService {
  // User Role Management
  static async assignRole(userId: string, role: string): Promise<UserRole> {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .upsert({
          user_id: userId,
          role: role as any,
          created_by: (await supabase.auth.getUser()).data.user?.id
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error assigning role:', error);
      throw error;
    }
  }

  static async getUserRoles(userId?: string): Promise<UserRole[]> {
    try {
      let query = supabase
        .from('user_roles')
        .select('*')
        .order('created_at', { ascending: false });

      if (userId) {
        query = query.eq('user_id', userId);
      }

      const { data, error } = await query;
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching user roles:', error);
      throw error;
    }
  }

  static async checkUserRole(userId: string, role: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .rpc('has_role', { _user_id: userId, _role: role as any });

      if (error) throw error;
      return data || false;
    } catch (error) {
      console.error('Error checking user role:', error);
      return false;
    }
  }

  static async isAdmin(userId?: string): Promise<boolean> {
    try {
      const targetUserId = userId || (await supabase.auth.getUser()).data.user?.id;
      if (!targetUserId) return false;

      const { data, error } = await supabase
        .rpc('is_admin', { _user_id: targetUserId });

      if (error) throw error;
      return data || false;
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  }

  // Content Management
  static async getContentPages(): Promise<ContentPage[]> {
    try {
      const { data, error } = await supabase
        .from('content_pages')
        .select('*')
        .order('updated_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching content pages:', error);
      throw error;
    }
  }

  static async getContentPage(id: string): Promise<ContentPage | null> {
    try {
      const { data, error } = await supabase
        .from('content_pages')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching content page:', error);
      throw error;
    }
  }

  static async createContentPage(page: Omit<ContentPage, 'id' | 'created_at' | 'updated_at'>): Promise<ContentPage> {
    try {
      const { data, error } = await supabase
        .from('content_pages')
        .insert({
          ...page,
          created_by: (await supabase.auth.getUser()).data.user?.id,
          updated_by: (await supabase.auth.getUser()).data.user?.id
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating content page:', error);
      throw error;
    }
  }

  static async updateContentPage(id: string, updates: Partial<ContentPage>): Promise<ContentPage> {
    try {
      const { data, error } = await supabase
        .from('content_pages')
        .update({
          ...updates,
          updated_by: (await supabase.auth.getUser()).data.user?.id
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating content page:', error);
      throw error;
    }
  }

  static async deleteContentPage(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('content_pages')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Error deleting content page:', error);
      throw error;
    }
  }

  // Media Management
  static async getMediaLibrary(): Promise<MediaItem[]> {
    try {
      const { data, error } = await supabase
        .from('media_library')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching media library:', error);
      throw error;
    }
  }

  static async uploadMedia(file: File, metadata: Partial<MediaItem>): Promise<MediaItem> {
    try {
      // Upload file to storage (you'll need to create the bucket)
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('media')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('media')
        .getPublicUrl(fileName);

      // Save to media library
      const { data, error } = await supabase
        .from('media_library')
        .insert({
          filename: fileName,
          original_filename: file.name,
          file_size: file.size,
          mime_type: file.type,
          url: publicUrl,
          ...metadata,
          created_by: (await supabase.auth.getUser()).data.user?.id
        })
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error uploading media:', error);
      throw error;
    }
  }

  // Audit Logs
  static async getAuditLogs(limit = 100): Promise<AuditLog[]> {
    try {
      const { data, error } = await supabase
        .from('audit_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching audit logs:', error);
      throw error;
    }
  }

  // Enhanced Meal Management
  static async getMealsForAdmin(): Promise<any[]> {
    try {
      const { data, error } = await supabase
        .from('meals')
        .select(`
          *,
          category:meal_categories(*)
        `)
        .order('sort_order', { ascending: true });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching meals for admin:', error);
      throw error;
    }
  }

  static async updateMeal(id: string, updates: any): Promise<any> {
    try {
      const { data, error } = await supabase
        .from('meals')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating meal:', error);
      throw error;
    }
  }

  static async bulkUpdateMeals(updates: Array<{ id: string; [key: string]: any }>): Promise<void> {
    try {
      for (const update of updates) {
        await this.updateMeal(update.id, update);
      }
    } catch (error) {
      console.error('Error bulk updating meals:', error);
      throw error;
    }
  }
}