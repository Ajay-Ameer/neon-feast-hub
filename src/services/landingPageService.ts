import { supabase } from "@/integrations/supabase/client";

export interface LandingPageContent {
  id: string;
  section_type: string;
  section_key: string;
  content: any;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export const LandingPageService = {
  async getHeroContent() {
    const { data, error } = await supabase
      .from('landing_page_content')
      .select('*')
      .eq('section_type', 'hero')
      .eq('section_key', 'main_hero')
      .eq('is_active', true)
      .single();

    if (error) throw error;
    return data;
  },

  async getAllContent() {
    const { data, error } = await supabase
      .from('landing_page_content')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true });

    if (error) throw error;
    return data;
  },

  async updateContent(id: string, content: any) {
    const { data, error } = await supabase
      .from('landing_page_content')
      .update({
        content,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async createContent(sectionType: string, sectionKey: string, content: any, displayOrder: number = 0) {
    const { data, error } = await supabase
      .from('landing_page_content')
      .insert({
        section_type: sectionType,
        section_key: sectionKey,
        content,
        display_order: displayOrder
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },

  async deleteContent(id: string) {
    const { error } = await supabase
      .from('landing_page_content')
      .delete()
      .eq('id', id);

    if (error) throw error;
  },

  async toggleActive(id: string, isActive: boolean) {
    const { data, error } = await supabase
      .from('landing_page_content')
      .update({ is_active: isActive })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  }
};
