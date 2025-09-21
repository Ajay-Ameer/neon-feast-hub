import { supabase } from '@/integrations/supabase/client';
import { MealPlan, UserSubscription, SubscriptionWithPlan } from '@/types/database';

export class SubscriptionService {
  static async getMealPlans(): Promise<MealPlan[]> {
    try {
      const { data, error } = await supabase
        .from('meal_plans')
        .select('*')
        .eq('is_active', true)
        .order('price_per_day');

      if (error) {
        console.error('Error fetching meal plans:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Error in getMealPlans:', error);
      throw error;
    }
  }

  static async getMealPlanById(id: string): Promise<MealPlan | null> {
    try {
      const { data, error } = await supabase
        .from('meal_plans')
        .select('*')
        .eq('id', id)
        .eq('is_active', true)
        .maybeSingle();

      if (error) {
        console.error('Error fetching meal plan by ID:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in getMealPlanById:', error);
      throw error;
    }
  }

  static async getUserSubscriptions(userId: string): Promise<SubscriptionWithPlan[]> {
    try {
      const { data, error } = await supabase
        .from('user_subscriptions')
        .select(`
          *,
          meal_plan:meal_plans(*),
          delivery_address:delivery_addresses(*)
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching user subscriptions:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Error in getUserSubscriptions:', error);
      throw error;
    }
  }

  static async getActiveSubscription(userId: string): Promise<SubscriptionWithPlan | null> {
    try {
      const { data, error } = await supabase
        .from('user_subscriptions')
        .select(`
          *,
          meal_plan:meal_plans(*),
          delivery_address:delivery_addresses(*)
        `)
        .eq('user_id', userId)
        .eq('status', 'active')
        .maybeSingle();

      if (error) {
        console.error('Error fetching active subscription:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in getActiveSubscription:', error);
      throw error;
    }
  }

  static async createSubscription(subscription: Omit<UserSubscription, 'id' | 'created_at' | 'updated_at'>): Promise<UserSubscription> {
    try {
      const { data, error } = await supabase
        .from('user_subscriptions')
        .insert({
          ...subscription,
          user_id: subscription.user_id // Explicitly set user_id
        })
        .select()
        .single();

      if (error) {
        console.error('Error creating subscription:', error);
        throw error;
      }

      // Update user profile subscription status
      await supabase
        .from('profiles')
        .update({ subscription_status: 'active' })
        .eq('user_id', subscription.user_id);

      return data;
    } catch (error) {
      console.error('Error in createSubscription:', error);
      throw error;
    }
  }

  static async updateSubscriptionStatus(subscriptionId: string, status: UserSubscription['status']): Promise<void> {
    try {
      const { error } = await supabase
        .from('user_subscriptions')
        .update({ status })
        .eq('id', subscriptionId);

      if (error) {
        console.error('Error updating subscription status:', error);
        throw error;
      }

      // If cancelling, update profile subscription status
      if (status === 'cancelled') {
        const { data: subscription } = await supabase
          .from('user_subscriptions')
          .select('user_id')
          .eq('id', subscriptionId)
          .single();

        if (subscription) {
          await supabase
            .from('profiles')
            .update({ subscription_status: 'cancelled' })
            .eq('user_id', subscription.user_id);
        }
      }
    } catch (error) {
      console.error('Error in updateSubscriptionStatus:', error);
      throw error;
    }
  }

  static async pauseSubscription(subscriptionId: string): Promise<void> {
    await this.updateSubscriptionStatus(subscriptionId, 'paused');
  }

  static async resumeSubscription(subscriptionId: string): Promise<void> {
    await this.updateSubscriptionStatus(subscriptionId, 'active');
  }

  static async cancelSubscription(subscriptionId: string): Promise<void> {
    await this.updateSubscriptionStatus(subscriptionId, 'cancelled');
  }

  static calculateSubscriptionPrice(
    pricePerDay: number, 
    durationDays: number, 
    discountPercentage: number = 0
  ): { subtotal: number; discount: number; total: number } {
    const subtotal = pricePerDay * durationDays;
    const discount = (subtotal * discountPercentage) / 100;
    const total = subtotal - discount;

    return { subtotal, discount, total };
  }
}