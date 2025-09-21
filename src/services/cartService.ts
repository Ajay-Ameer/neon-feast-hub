import { supabase } from '@/integrations/supabase/client';
import { CartItem, CartItemWithMeal } from '@/types/database';

export class CartService {
  static async getCartItems(userId: string): Promise<CartItemWithMeal[]> {
    try {
      const { data, error } = await supabase
        .from('cart_items')
        .select(`
          *,
          meal:meals(
            *,
            category:meal_categories(*)
          )
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching cart items:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Error in getCartItems:', error);
      throw error;
    }
  }

  static async addToCart(userId: string, mealId: string, quantity: number = 1): Promise<CartItem> {
    try {
      // Use upsert to handle existing items
      const { data, error } = await supabase
        .from('cart_items')
        .upsert({
          user_id: userId,
          meal_id: mealId,
          quantity: quantity
        }, {
          onConflict: 'user_id,meal_id'
        })
        .select()
        .single();

      if (error) {
        console.error('Error adding to cart:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in addToCart:', error);
      throw error;
    }
  }

  static async updateCartItemQuantity(userId: string, mealId: string, quantity: number): Promise<void> {
    try {
      if (quantity <= 0) {
        await this.removeFromCart(userId, mealId);
        return;
      }

      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('user_id', userId)
        .eq('meal_id', mealId);

      if (error) {
        console.error('Error updating cart item quantity:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error in updateCartItemQuantity:', error);
      throw error;
    }
  }

  static async removeFromCart(userId: string, mealId: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', userId)
        .eq('meal_id', mealId);

      if (error) {
        console.error('Error removing from cart:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error in removeFromCart:', error);
      throw error;
    }
  }

  static async clearCart(userId: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', userId);

      if (error) {
        console.error('Error clearing cart:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error in clearCart:', error);
      throw error;
    }
  }

  static async getCartTotal(userId: string): Promise<{ totalItems: number; totalPrice: number }> {
    try {
      const items = await this.getCartItems(userId);
      
      const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
      const totalPrice = items.reduce((sum, item) => sum + (item.meal.price * item.quantity), 0);

      return { totalItems, totalPrice };
    } catch (error) {
      console.error('Error in getCartTotal:', error);
      throw error;
    }
  }
}