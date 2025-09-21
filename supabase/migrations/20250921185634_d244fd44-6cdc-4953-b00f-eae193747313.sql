-- Enhanced User Profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS phone TEXT,
ADD COLUMN IF NOT EXISTS date_of_birth DATE,
ADD COLUMN IF NOT EXISTS gender TEXT CHECK (gender IN ('male', 'female', 'other')),
ADD COLUMN IF NOT EXISTS height_cm INTEGER,
ADD COLUMN IF NOT EXISTS weight_kg DECIMAL(5,2),
ADD COLUMN IF NOT EXISTS activity_level TEXT CHECK (activity_level IN ('sedentary', 'lightly_active', 'moderately_active', 'very_active', 'extremely_active')),
ADD COLUMN IF NOT EXISTS dietary_preference TEXT CHECK (dietary_preference IN ('vegetarian', 'vegan', 'non_vegetarian', 'eggetarian')),
ADD COLUMN IF NOT EXISTS food_allergies TEXT[],
ADD COLUMN IF NOT EXISTS medical_conditions TEXT[],
ADD COLUMN IF NOT EXISTS fitness_goals TEXT[],
ADD COLUMN IF NOT EXISTS subscription_status TEXT DEFAULT 'inactive' CHECK (subscription_status IN ('active', 'inactive', 'paused', 'cancelled'));

-- Delivery Addresses
CREATE TABLE public.delivery_addresses (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    address_line_1 TEXT NOT NULL,
    address_line_2 TEXT,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    postal_code TEXT NOT NULL,
    landmark TEXT,
    is_default BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.delivery_addresses ENABLE ROW LEVEL SECURITY;

-- Meal Categories
CREATE TABLE public.meal_categories (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    image_url TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.meal_categories ENABLE ROW LEVEL SECURITY;

-- Meals Database
CREATE TABLE public.meals (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    category_id UUID REFERENCES public.meal_categories(id),
    image_url TEXT,
    preparation_time_minutes INTEGER,
    difficulty_level TEXT CHECK (difficulty_level IN ('easy', 'medium', 'hard')),
    cuisine_type TEXT,
    meal_type TEXT CHECK (meal_type IN ('breakfast', 'lunch', 'dinner', 'snack')),
    dietary_tags TEXT[], -- ['vegetarian', 'vegan', 'gluten_free', 'dairy_free', etc.]
    ingredients JSONB, -- [{"name": "ingredient", "quantity": "100g", "calories": 50}]
    nutrition JSONB NOT NULL, -- {"calories": 400, "protein": 25, "carbs": 30, "fat": 15, "fiber": 5}
    allergens TEXT[], -- ['nuts', 'dairy', 'gluten', etc.]
    price DECIMAL(10,2) NOT NULL,
    cost_price DECIMAL(10,2),
    is_available BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    stock_quantity INTEGER DEFAULT 0,
    min_stock_alert INTEGER DEFAULT 10,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_by UUID REFERENCES public.profiles(user_id)
);

ALTER TABLE public.meals ENABLE ROW LEVEL SECURITY;

-- Meal Plans
CREATE TABLE public.meal_plans (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    duration_days INTEGER NOT NULL,
    meals_per_day INTEGER NOT NULL DEFAULT 3,
    price_per_day DECIMAL(10,2) NOT NULL,
    discount_percentage DECIMAL(5,2) DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    features TEXT[],
    target_goals TEXT[], -- ['weight_loss', 'muscle_gain', 'maintenance', etc.]
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.meal_plans ENABLE ROW LEVEL SECURITY;

-- User Subscriptions
CREATE TABLE public.user_subscriptions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
    meal_plan_id UUID NOT NULL REFERENCES public.meal_plans(id),
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'paused', 'cancelled', 'completed')),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    current_period_start DATE NOT NULL,
    current_period_end DATE NOT NULL,
    billing_cycle TEXT NOT NULL DEFAULT 'monthly' CHECK (billing_cycle IN ('weekly', 'monthly', 'quarterly')),
    total_amount DECIMAL(10,2) NOT NULL,
    discount_amount DECIMAL(10,2) DEFAULT 0,
    payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'refunded')),
    delivery_address_id UUID REFERENCES public.delivery_addresses(id),
    special_instructions TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.user_subscriptions ENABLE ROW LEVEL SECURITY;

-- Orders
CREATE TABLE public.orders (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
    subscription_id UUID REFERENCES public.user_subscriptions(id),
    order_number TEXT NOT NULL UNIQUE,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'preparing', 'out_for_delivery', 'delivered', 'cancelled')),
    order_type TEXT NOT NULL DEFAULT 'subscription' CHECK (order_type IN ('subscription', 'one_time')),
    delivery_date DATE NOT NULL,
    delivery_time_slot TEXT,
    delivery_address_id UUID NOT NULL REFERENCES public.delivery_addresses(id),
    subtotal DECIMAL(10,2) NOT NULL,
    delivery_charge DECIMAL(10,2) DEFAULT 0,
    discount_amount DECIMAL(10,2) DEFAULT 0,
    tax_amount DECIMAL(10,2) DEFAULT 0,
    total_amount DECIMAL(10,2) NOT NULL,
    payment_method TEXT,
    payment_reference TEXT,
    delivery_partner_id TEXT,
    delivery_tracking_id TEXT,
    special_instructions TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Order Items
CREATE TABLE public.order_items (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    order_id UUID NOT NULL REFERENCES public.orders(id) ON DELETE CASCADE,
    meal_id UUID NOT NULL REFERENCES public.meals(id),
    quantity INTEGER NOT NULL DEFAULT 1,
    unit_price DECIMAL(10,2) NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    meal_customizations JSONB, -- Any customizations like spice level, etc.
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;

-- User Meal Calendar
CREATE TABLE public.user_meal_calendar (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
    subscription_id UUID REFERENCES public.user_subscriptions(id),
    meal_id UUID NOT NULL REFERENCES public.meals(id),
    scheduled_date DATE NOT NULL,
    meal_type TEXT NOT NULL CHECK (meal_type IN ('breakfast', 'lunch', 'dinner', 'snack')),
    status TEXT DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'delivered', 'skipped', 'swapped')),
    swap_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(user_id, scheduled_date, meal_type)
);

ALTER TABLE public.user_meal_calendar ENABLE ROW LEVEL SECURITY;

-- Cart Items (Database-backed)
CREATE TABLE public.cart_items (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
    meal_id UUID NOT NULL REFERENCES public.meals(id),
    quantity INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(user_id, meal_id)
);

ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;

-- Payments
CREATE TABLE public.payments (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
    order_id UUID REFERENCES public.orders(id),
    subscription_id UUID REFERENCES public.user_subscriptions(id),
    payment_gateway TEXT NOT NULL DEFAULT 'razorpay',
    payment_id TEXT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    currency TEXT DEFAULT 'INR',
    status TEXT NOT NULL CHECK (status IN ('pending', 'success', 'failed', 'refunded')),
    payment_method TEXT,
    gateway_response JSONB,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Notifications
CREATE TABLE public.notifications (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES public.profiles(user_id) ON DELETE CASCADE,
    type TEXT NOT NULL CHECK (type IN ('order_confirmation', 'delivery_reminder', 'payment_success', 'subscription_renewal', 'general')),
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    email_sent BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- Analytics Events
CREATE TABLE public.analytics_events (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES public.profiles(user_id),
    event_type TEXT NOT NULL,
    event_data JSONB,
    session_id TEXT,
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies

-- Delivery Addresses Policies
CREATE POLICY "Users can manage their own delivery addresses" ON public.delivery_addresses
FOR ALL USING (auth.uid() IN (SELECT user_id FROM public.profiles WHERE user_id = delivery_addresses.user_id));

-- Meal Categories Policies (Public read access)
CREATE POLICY "Anyone can view meal categories" ON public.meal_categories
FOR SELECT USING (is_active = true);

-- Meals Policies (Public read access for available meals)
CREATE POLICY "Anyone can view available meals" ON public.meals
FOR SELECT USING (is_available = true);

-- Meal Plans Policies (Public read access)
CREATE POLICY "Anyone can view active meal plans" ON public.meal_plans
FOR SELECT USING (is_active = true);

-- User Subscriptions Policies
CREATE POLICY "Users can manage their own subscriptions" ON public.user_subscriptions
FOR ALL USING (auth.uid() = user_id);

-- Orders Policies
CREATE POLICY "Users can manage their own orders" ON public.orders
FOR ALL USING (auth.uid() = user_id);

-- Order Items Policies
CREATE POLICY "Users can view their order items" ON public.order_items
FOR SELECT USING (auth.uid() IN (SELECT user_id FROM public.orders WHERE orders.id = order_items.order_id));

-- User Meal Calendar Policies
CREATE POLICY "Users can manage their own meal calendar" ON public.user_meal_calendar
FOR ALL USING (auth.uid() = user_id);

-- Cart Items Policies
CREATE POLICY "Users can manage their own cart" ON public.cart_items
FOR ALL USING (auth.uid() = user_id);

-- Payments Policies
CREATE POLICY "Users can view their own payments" ON public.payments
FOR SELECT USING (auth.uid() = user_id);

-- Notifications Policies
CREATE POLICY "Users can manage their own notifications" ON public.notifications
FOR ALL USING (auth.uid() = user_id);

-- Analytics Events Policies
CREATE POLICY "Users can insert analytics events" ON public.analytics_events
FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

-- Create indexes for better performance
CREATE INDEX idx_delivery_addresses_user_id ON public.delivery_addresses(user_id);
CREATE INDEX idx_meals_category_id ON public.meals(category_id);
CREATE INDEX idx_meals_available ON public.meals(is_available);
CREATE INDEX idx_user_subscriptions_user_id ON public.user_subscriptions(user_id);
CREATE INDEX idx_orders_user_id ON public.orders(user_id);
CREATE INDEX idx_orders_delivery_date ON public.orders(delivery_date);
CREATE INDEX idx_order_items_order_id ON public.order_items(order_id);
CREATE INDEX idx_user_meal_calendar_user_date ON public.user_meal_calendar(user_id, scheduled_date);
CREATE INDEX idx_cart_items_user_id ON public.cart_items(user_id);
CREATE INDEX idx_payments_user_id ON public.payments(user_id);
CREATE INDEX idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX idx_analytics_events_type ON public.analytics_events(event_type);

-- Create triggers for updated_at
CREATE TRIGGER update_delivery_addresses_updated_at
    BEFORE UPDATE ON public.delivery_addresses
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_meal_categories_updated_at
    BEFORE UPDATE ON public.meal_categories
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_meals_updated_at
    BEFORE UPDATE ON public.meals
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_meal_plans_updated_at
    BEFORE UPDATE ON public.meal_plans
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_subscriptions_updated_at
    BEFORE UPDATE ON public.user_subscriptions
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
    BEFORE UPDATE ON public.orders
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_meal_calendar_updated_at
    BEFORE UPDATE ON public.user_meal_calendar
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_cart_items_updated_at
    BEFORE UPDATE ON public.cart_items
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_payments_updated_at
    BEFORE UPDATE ON public.payments
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Generate order numbers function
CREATE OR REPLACE FUNCTION public.generate_order_number()
RETURNS TEXT AS $$
BEGIN
    RETURN 'ORD' || TO_CHAR(NOW(), 'YYYYMMDD') || LPAD(NEXTVAL('order_number_seq')::TEXT, 6, '0');
END;
$$ LANGUAGE plpgsql;

-- Create sequence for order numbers
CREATE SEQUENCE IF NOT EXISTS order_number_seq START 1;

-- Insert sample data for testing

-- Meal Categories
INSERT INTO public.meal_categories (name, description, display_order) VALUES
('Weight Loss', 'Low calorie, high nutrition meals for weight management', 1),
('Muscle Gain', 'High protein meals for muscle building', 2),
('Keto', 'Low carb, high fat ketogenic meals', 3),
('Vegan', 'Plant-based meals with complete nutrition', 4),
('Diabetic Friendly', 'Low glycemic index meals for diabetes management', 5);

-- Sample Meal Plans
INSERT INTO public.meal_plans (name, description, duration_days, meals_per_day, price_per_day, features, target_goals) VALUES
('Weight Loss Pro', 'Scientifically designed meals for effective weight loss', 30, 3, 299.00, ARRAY['Calorie controlled', 'High fiber', 'Portion controlled'], ARRAY['weight_loss']),
('Muscle Builder', 'High protein meals for lean muscle gain', 30, 3, 399.00, ARRAY['High protein', 'Post workout meals', 'Balanced macros'], ARRAY['muscle_gain']),
('Keto Classic', 'Ketogenic meals to maintain ketosis', 30, 2, 349.00, ARRAY['Ultra low carb', 'High healthy fats', 'Keto certified'], ARRAY['weight_loss', 'metabolic_health']);

-- Sample Meals
INSERT INTO public.meals (name, description, category_id, meal_type, dietary_tags, nutrition, price, allergens, is_featured) 
SELECT 
    'Grilled Chicken Salad',
    'Fresh mixed greens with grilled chicken breast',
    c.id,
    'lunch',
    ARRAY['high_protein', 'low_carb'],
    '{"calories": 350, "protein": 35, "carbs": 12, "fat": 18, "fiber": 8}',
    180.00,
    ARRAY['nuts'],
    true
FROM public.meal_categories c WHERE c.name = 'Weight Loss';

INSERT INTO public.meals (name, description, category_id, meal_type, dietary_tags, nutrition, price, allergens) 
SELECT 
    'Quinoa Buddha Bowl',
    'Nutrient dense bowl with quinoa, vegetables and tahini',
    c.id,
    'dinner',
    ARRAY['vegan', 'high_fiber'],
    '{"calories": 420, "protein": 16, "carbs": 65, "fat": 14, "fiber": 12}',
    160.00,
    ARRAY['sesame']
FROM public.meal_categories c WHERE c.name = 'Vegan';