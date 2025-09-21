// Core database types for the meal delivery platform

export interface UserProfile {
  user_id: string;
  first_name?: string | null;
  last_name?: string | null;
  username?: string | null;
  phone?: string | null;
  date_of_birth?: string | null;
  gender?: string | null;
  height_cm?: number | null;
  weight_kg?: number | null;
  activity_level?: string | null;
  dietary_preference?: string | null;
  food_allergies?: string[] | null;
  medical_conditions?: string[] | null;
  fitness_goals?: string[] | null;
  subscription_status: string;
  created_at: string;
  updated_at: string;
}

export interface DeliveryAddress {
  id: string;
  user_id: string;
  title: string;
  full_name: string;
  phone: string;
  address_line_1: string;
  address_line_2?: string;
  city: string;
  state: string;
  postal_code: string;
  landmark?: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface MealCategory {
  id: string;
  name: string;
  description?: string;
  image_url?: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
}

export interface Ingredient {
  name: string;
  quantity: string;
  calories?: number;
}

export interface Meal {
  id: string;
  name: string;
  description?: string | null;
  category_id?: string | null;
  image_url?: string | null;
  preparation_time_minutes?: number | null;
  difficulty_level?: string | null;
  cuisine_type?: string | null;
  meal_type: string;
  dietary_tags: string[];
  ingredients?: any | null;
  nutrition: any;
  allergens: string[];
  price: number;
  cost_price?: number | null;
  is_available: boolean;
  is_featured: boolean;
  stock_quantity: number;
  min_stock_alert: number;
  created_at: string;
  updated_at: string;
  created_by?: string | null;
}

export interface MealPlan {
  id: string;
  name: string;
  description?: string;
  duration_days: number;
  meals_per_day: number;
  price_per_day: number;
  discount_percentage: number;
  is_active: boolean;
  features: string[];
  target_goals: string[];
  created_at: string;
  updated_at: string;
}

export interface UserSubscription {
  id: string;
  user_id: string;
  meal_plan_id: string;
  status: string;
  start_date: string;
  end_date: string;
  current_period_start: string;
  current_period_end: string;
  billing_cycle: string;
  total_amount: number;
  discount_amount: number;
  payment_status: string;
  delivery_address_id?: string | null;
  special_instructions?: string | null;
  created_at: string;
  updated_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  subscription_id?: string | null;
  order_number: string;
  status: string;
  order_type: string;
  delivery_date: string;
  delivery_time_slot?: string | null;
  delivery_address_id: string;
  subtotal: number;
  delivery_charge: number;
  discount_amount: number;
  tax_amount: number;
  total_amount: number;
  payment_method?: string | null;
  payment_reference?: string | null;
  delivery_partner_id?: string | null;
  delivery_tracking_id?: string | null;
  special_instructions?: string | null;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  meal_id: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  meal_customizations?: any | null;
  created_at: string;
}

export interface UserMealCalendar {
  id: string;
  user_id: string;
  subscription_id?: string | null;
  meal_id: string;
  scheduled_date: string;
  meal_type: string;
  status: string;
  swap_count: number;
  created_at: string;
  updated_at: string;
}

export interface CartItem {
  id: string;
  user_id: string;
  meal_id: string;
  quantity: number;
  created_at: string;
  updated_at: string;
}

export interface Payment {
  id: string;
  user_id: string;
  order_id?: string | null;
  subscription_id?: string | null;
  payment_gateway: string;
  payment_id: string;
  amount: number;
  currency: string;
  status: string;
  payment_method?: string | null;
  gateway_response?: any | null;
  created_at: string;
  updated_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  type: string;
  title: string;
  message: string;
  is_read: boolean;
  email_sent: boolean;
  created_at: string;
}

export interface AnalyticsEvent {
  id: string;
  user_id?: string | null;
  event_type: string;
  event_data?: any | null;
  session_id?: string | null;
  ip_address?: string | null;
  user_agent?: string | null;
  created_at: string;
}

// Extended interfaces with relations
export interface MealWithCategory extends Meal {
  category?: MealCategory;
}

export interface OrderWithItems extends Order {
  items: (OrderItem & { meal: Meal })[];
  delivery_address: DeliveryAddress;
}

export interface SubscriptionWithPlan extends UserSubscription {
  meal_plan: MealPlan;
  delivery_address?: DeliveryAddress;
}

export interface CartItemWithMeal extends CartItem {
  meal: Meal;
}