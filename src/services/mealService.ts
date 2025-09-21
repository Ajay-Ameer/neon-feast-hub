import { supabase } from '@/integrations/supabase/client';
import { Meal, MealCategory, MealWithCategory } from '@/types/database';

export class MealService {
  static async getCategories(): Promise<MealCategory[]> {
    try {
      const { data, error } = await supabase
        .from('meal_categories')
        .select('*')
        .eq('is_active', true)
        .order('display_order');

      if (error) {
        console.error('Error fetching meal categories:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Error in getCategories:', error);
      throw error;
    }
  }

  static async getMeals(filters?: {
    categoryId?: string;
    mealType?: string;
    dietaryTags?: string[];
    featured?: boolean;
    limit?: number;
  }): Promise<MealWithCategory[]> {
    try {
      let query = supabase
        .from('meals')
        .select(`
          *,
          category:meal_categories(*)
        `)
        .eq('is_available', true);

      if (filters?.categoryId) {
        query = query.eq('category_id', filters.categoryId);
      }

      if (filters?.mealType) {
        query = query.eq('meal_type', filters.mealType);
      }

      if (filters?.dietaryTags && filters.dietaryTags.length > 0) {
        query = query.overlaps('dietary_tags', filters.dietaryTags);
      }

      if (filters?.featured) {
        query = query.eq('is_featured', true);
      }

      if (filters?.limit) {
        query = query.limit(filters.limit);
      }

      query = query.order('name');

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching meals:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Error in getMeals:', error);
      throw error;
    }
  }

  static async getMealById(id: string): Promise<MealWithCategory | null> {
    try {
      const { data, error } = await supabase
        .from('meals')
        .select(`
          *,
          category:meal_categories(*)
        `)
        .eq('id', id)
        .eq('is_available', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching meal by ID:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in getMealById:', error);
      throw error;
    }
  }

  static async getFeaturedMeals(limit = 8): Promise<MealWithCategory[]> {
    return this.getMeals({ featured: true, limit });
  }

  static async searchMeals(query: string): Promise<MealWithCategory[]> {
    try {
      const { data, error } = await supabase
        .from('meals')
        .select(`
          *,
          category:meal_categories(*)
        `)
        .eq('is_available', true)
        .or(`name.ilike.%${query}%,description.ilike.%${query}%`)
        .order('name');

      if (error) {
        console.error('Error searching meals:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Error in searchMeals:', error);
      throw error;
    }
  }

  static async updateStockQuantity(mealId: string, quantity: number): Promise<void> {
    try {
      const { error } = await supabase
        .from('meals')
        .update({ stock_quantity: quantity })
        .eq('id', mealId);

      if (error) {
        console.error('Error updating stock quantity:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error in updateStockQuantity:', error);
      throw error;
    }
  }
}