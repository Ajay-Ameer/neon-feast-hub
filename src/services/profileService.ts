import { supabase } from '@/integrations/supabase/client';
import { UserProfile, DeliveryAddress } from '@/types/database';

export class ProfileService {
  static async getProfile(userId: string): Promise<UserProfile | null> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching profile:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in getProfile:', error);
      throw error;
    }
  }

  static async updateProfile(userId: string, updates: Partial<UserProfile>): Promise<UserProfile> {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({
          ...updates,
          user_id: userId // Explicitly set user_id
        })
        .eq('user_id', userId)
        .select()
        .single();

      if (error) {
        console.error('Error updating profile:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in updateProfile:', error);
      throw error;
    }
  }

  static async getDeliveryAddresses(userId: string): Promise<DeliveryAddress[]> {
    try {
      const { data, error } = await supabase
        .from('delivery_addresses')
        .select('*')
        .eq('user_id', userId)
        .order('is_default', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching delivery addresses:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Error in getDeliveryAddresses:', error);
      throw error;
    }
  }

  static async getDefaultDeliveryAddress(userId: string): Promise<DeliveryAddress | null> {
    try {
      const { data, error } = await supabase
        .from('delivery_addresses')
        .select('*')
        .eq('user_id', userId)
        .eq('is_default', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching default delivery address:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in getDefaultDeliveryAddress:', error);
      throw error;
    }
  }

  static async createDeliveryAddress(
    userId: string,
    address: Omit<DeliveryAddress, 'id' | 'user_id' | 'created_at' | 'updated_at'>
  ): Promise<DeliveryAddress> {
    try {
      // If this is set as default, unset all other defaults first
      if (address.is_default) {
        await supabase
          .from('delivery_addresses')
          .update({ is_default: false })
          .eq('user_id', userId);
      }

      const { data, error } = await supabase
        .from('delivery_addresses')
        .insert({
          ...address,
          user_id: userId // Explicitly set user_id
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating delivery address:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in createDeliveryAddress:', error);
      throw error;
    }
  }

  static async updateDeliveryAddress(
    addressId: string,
    userId: string,
    updates: Partial<DeliveryAddress>
  ): Promise<DeliveryAddress> {
    try {
      // If this is set as default, unset all other defaults first
      if (updates.is_default) {
        await supabase
          .from('delivery_addresses')
          .update({ is_default: false })
          .eq('user_id', userId);
      }

      const { data, error } = await supabase
        .from('delivery_addresses')
        .update(updates)
        .eq('id', addressId)
        .eq('user_id', userId)
        .select()
        .single();

      if (error) {
        console.error('Error updating delivery address:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in updateDeliveryAddress:', error);
      throw error;
    }
  }

  static async deleteDeliveryAddress(addressId: string, userId: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('delivery_addresses')
        .delete()
        .eq('id', addressId)
        .eq('user_id', userId);

      if (error) {
        console.error('Error deleting delivery address:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error in deleteDeliveryAddress:', error);
      throw error;
    }
  }

  static calculateBMI(heightCm: number, weightKg: number): number {
    const heightM = heightCm / 100;
    return Number((weightKg / (heightM * heightM)).toFixed(1));
  }

  static getBMICategory(bmi: number): string {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 25) return 'Normal weight';
    if (bmi < 30) return 'Overweight';
    return 'Obese';
  }

  static calculateCalorieNeeds(
    gender: 'male' | 'female',
    age: number,
    heightCm: number,
    weightKg: number,
    activityLevel: 'sedentary' | 'lightly_active' | 'moderately_active' | 'very_active' | 'extremely_active'
  ): number {
    // Harris-Benedict Formula
    let bmr: number;
    
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * age);
    } else {
      bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * age);
    }

    const activityMultipliers = {
      sedentary: 1.2,
      lightly_active: 1.375,
      moderately_active: 1.55,
      very_active: 1.725,
      extremely_active: 1.9
    };

    return Math.round(bmr * activityMultipliers[activityLevel]);
  }
}