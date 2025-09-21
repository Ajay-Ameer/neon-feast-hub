import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { CartService } from '@/services/cartService';
import { CartItemWithMeal } from '@/types/database';
import { toast } from 'sonner';

export const useCart = () => {
  const { user } = useAuth();
  const [items, setItems] = useState<CartItemWithMeal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCartItems = async () => {
    if (!user?.id) return;

    try {
      setLoading(true);
      setError(null);
      const cartItems = await CartService.getCartItems(user.id);
      setItems(cartItems);
    } catch (error) {
      console.error('Error fetching cart items:', error);
      setError('Failed to fetch cart items');
      toast.error('Failed to load cart items');
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (mealId: string, quantity: number = 1) => {
    if (!user?.id) {
      toast.error('Please log in to add items to cart');
      return;
    }

    try {
      setError(null);
      await CartService.addToCart(user.id, mealId, quantity);
      await fetchCartItems();
      toast.success('Item added to cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
      setError('Failed to add item to cart');
      toast.error('Failed to add item to cart');
    }
  };

  const updateQuantity = async (mealId: string, quantity: number) => {
    if (!user?.id) return;

    try {
      setError(null);
      await CartService.updateCartItemQuantity(user.id, mealId, quantity);
      await fetchCartItems();
    } catch (error) {
      console.error('Error updating quantity:', error);
      setError('Failed to update quantity');
      toast.error('Failed to update quantity');
    }
  };

  const removeFromCart = async (mealId: string) => {
    if (!user?.id) return;

    try {
      setError(null);
      await CartService.removeFromCart(user.id, mealId);
      await fetchCartItems();
      toast.success('Item removed from cart');
    } catch (error) {
      console.error('Error removing from cart:', error);
      setError('Failed to remove item from cart');
      toast.error('Failed to remove item from cart');
    }
  };

  const clearCart = async () => {
    if (!user?.id) return;

    try {
      setError(null);
      await CartService.clearCart(user.id);
      setItems([]);
      toast.success('Cart cleared');
    } catch (error) {
      console.error('Error clearing cart:', error);
      setError('Failed to clear cart');
      toast.error('Failed to clear cart');
    }
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.meal.price * item.quantity), 0);
  };

  const getTotalCalories = () => {
    return items.reduce((total, item) => total + (item.meal.nutrition.calories * item.quantity), 0);
  };

  useEffect(() => {
    if (user?.id) {
      fetchCartItems();
    } else {
      setItems([]);
    }
  }, [user?.id]);

  return {
    items,
    loading,
    error,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getTotalItems,
    getTotalPrice,
    getTotalCalories,
    refetch: fetchCartItems
  };
};