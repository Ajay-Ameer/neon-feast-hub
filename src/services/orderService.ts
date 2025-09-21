import { supabase } from '@/integrations/supabase/client';
import { Order, OrderItem, OrderWithItems } from '@/types/database';

export class OrderService {
  static async getUserOrders(userId: string): Promise<OrderWithItems[]> {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          items:order_items(
            *,
            meal:meals(*)
          ),
          delivery_address:delivery_addresses(*)
        `)
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching user orders:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Error in getUserOrders:', error);
      throw error;
    }
  }

  static async getOrderById(orderId: string, userId: string): Promise<OrderWithItems | null> {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          items:order_items(
            *,
            meal:meals(*)
          ),
          delivery_address:delivery_addresses(*)
        `)
        .eq('id', orderId)
        .eq('user_id', userId)
        .maybeSingle();

      if (error) {
        console.error('Error fetching order by ID:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Error in getOrderById:', error);
      throw error;
    }
  }

  static async createOrder(
    orderData: Omit<Order, 'id' | 'order_number' | 'created_at' | 'updated_at'>,
    orderItems: Omit<OrderItem, 'id' | 'order_id' | 'created_at'>[]
  ): Promise<OrderWithItems> {
    try {
      // Create order with generated order number
      const orderNumber = `ORD${Date.now().toString().slice(-8)}${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
      
      const { data: orderResult, error: orderError } = await supabase
        .from('orders')
        .insert({
          ...orderData,
          order_number: orderNumber,
          user_id: orderData.user_id // Explicitly set user_id
        })
        .select()
        .single();

      if (orderError) {
        console.error('Error creating order:', orderError);
        throw orderError;
      }

      const orderId = orderResult.id;

      // Create order items
      const itemsWithOrderId = orderItems.map(item => ({
        ...item,
        order_id: orderId
      }));

      const { data: itemsData, error: itemsError } = await supabase
        .from('order_items')
        .insert(itemsWithOrderId)
        .select(`
          *,
          meal:meals(*)
        `);

      if (itemsError) {
        console.error('Error creating order items:', itemsError);
        throw itemsError;
      }

      // Fetch the complete order with items
      const order = await this.getOrderById(orderId, orderData.user_id);
      
      if (!order) {
        throw new Error('Failed to fetch created order');
      }

      return order;
    } catch (error) {
      console.error('Error in createOrder:', error);
      throw error;
    }
  }

  static async updateOrderStatus(orderId: string, status: Order['status']): Promise<void> {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ status })
        .eq('id', orderId);

      if (error) {
        console.error('Error updating order status:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error in updateOrderStatus:', error);
      throw error;
    }
  }

  static async cancelOrder(orderId: string, userId: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('orders')
        .update({ status: 'cancelled' })
        .eq('id', orderId)
        .eq('user_id', userId);

      if (error) {
        console.error('Error cancelling order:', error);
        throw error;
      }
    } catch (error) {
      console.error('Error in cancelOrder:', error);
      throw error;
    }
  }

  static async getOrdersByStatus(status: Order['status']): Promise<OrderWithItems[]> {
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          items:order_items(
            *,
            meal:meals(*)
          ),
          delivery_address:delivery_addresses(*)
        `)
        .eq('status', status)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching orders by status:', error);
        throw error;
      }

      return data || [];
    } catch (error) {
      console.error('Error in getOrdersByStatus:', error);
      throw error;
    }
  }

  static calculateOrderTotals(
    items: { quantity: number; unit_price: number }[],
    deliveryCharge: number = 0,
    discountAmount: number = 0,
    taxRate: number = 0.18 // 18% GST
  ): { subtotal: number; taxAmount: number; total: number } {
    const subtotal = items.reduce((sum, item) => sum + (item.quantity * item.unit_price), 0);
    const taxableAmount = subtotal + deliveryCharge - discountAmount;
    const taxAmount = taxableAmount * taxRate;
    const total = subtotal + deliveryCharge - discountAmount + taxAmount;

    return {
      subtotal,
      taxAmount: Number(taxAmount.toFixed(2)),
      total: Number(total.toFixed(2))
    };
  }
}