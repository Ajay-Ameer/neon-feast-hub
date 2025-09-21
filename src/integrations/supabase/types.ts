export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      analytics_events: {
        Row: {
          created_at: string
          event_data: Json | null
          event_type: string
          id: string
          ip_address: string | null
          session_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          event_data?: Json | null
          event_type: string
          id?: string
          ip_address?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          event_data?: Json | null
          event_type?: string
          id?: string
          ip_address?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "analytics_events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      audit_logs: {
        Row: {
          action: string
          created_at: string
          id: string
          new_values: Json | null
          old_values: Json | null
          record_id: string
          table_name: string
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          id?: string
          new_values?: Json | null
          old_values?: Json | null
          record_id: string
          table_name: string
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          id?: string
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string
          table_name?: string
          user_id?: string | null
        }
        Relationships: []
      }
      cart_items: {
        Row: {
          created_at: string
          id: string
          meal_id: string
          quantity: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          meal_id: string
          quantity?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          meal_id?: string
          quantity?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_meal_id_fkey"
            columns: ["meal_id"]
            isOneToOne: false
            referencedRelation: "meals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cart_items_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      content_pages: {
        Row: {
          content: Json
          created_at: string
          created_by: string | null
          id: string
          meta_description: string | null
          meta_title: string | null
          publish_at: string | null
          slug: string
          status: string
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          content?: Json
          created_at?: string
          created_by?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          publish_at?: string | null
          slug: string
          status?: string
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          content?: Json
          created_at?: string
          created_by?: string | null
          id?: string
          meta_description?: string | null
          meta_title?: string | null
          publish_at?: string | null
          slug?: string
          status?: string
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      content_revisions: {
        Row: {
          content: Json
          created_at: string
          created_by: string | null
          id: string
          message: string | null
          page_id: string | null
        }
        Insert: {
          content: Json
          created_at?: string
          created_by?: string | null
          id?: string
          message?: string | null
          page_id?: string | null
        }
        Update: {
          content?: Json
          created_at?: string
          created_by?: string | null
          id?: string
          message?: string | null
          page_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "content_revisions_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "content_pages"
            referencedColumns: ["id"]
          },
        ]
      }
      content_sections: {
        Row: {
          created_at: string
          id: string
          order_index: number
          page_id: string | null
          props: Json
          type: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          order_index?: number
          page_id?: string | null
          props?: Json
          type: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          order_index?: number
          page_id?: string | null
          props?: Json
          type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "content_sections_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "content_pages"
            referencedColumns: ["id"]
          },
        ]
      }
      delivery_addresses: {
        Row: {
          address_line_1: string
          address_line_2: string | null
          city: string
          created_at: string
          full_name: string
          id: string
          is_default: boolean | null
          landmark: string | null
          phone: string
          postal_code: string
          state: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          address_line_1: string
          address_line_2?: string | null
          city: string
          created_at?: string
          full_name: string
          id?: string
          is_default?: boolean | null
          landmark?: string | null
          phone: string
          postal_code: string
          state: string
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          address_line_1?: string
          address_line_2?: string | null
          city?: string
          created_at?: string
          full_name?: string
          id?: string
          is_default?: boolean | null
          landmark?: string | null
          phone?: string
          postal_code?: string
          state?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "delivery_addresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      meal_categories: {
        Row: {
          created_at: string
          description: string | null
          display_order: number | null
          id: string
          image_url: string | null
          is_active: boolean | null
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      meal_plans: {
        Row: {
          created_at: string
          description: string | null
          discount_percentage: number | null
          duration_days: number
          features: string[] | null
          id: string
          is_active: boolean | null
          meals_per_day: number
          name: string
          price_per_day: number
          target_goals: string[] | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          discount_percentage?: number | null
          duration_days: number
          features?: string[] | null
          id?: string
          is_active?: boolean | null
          meals_per_day?: number
          name: string
          price_per_day: number
          target_goals?: string[] | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          discount_percentage?: number | null
          duration_days?: number
          features?: string[] | null
          id?: string
          is_active?: boolean | null
          meals_per_day?: number
          name?: string
          price_per_day?: number
          target_goals?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      meals: {
        Row: {
          allergens: string[] | null
          category_id: string | null
          cost_price: number | null
          created_at: string
          created_by: string | null
          cuisine_type: string | null
          description: string | null
          dietary_tags: string[] | null
          difficulty_level: string | null
          id: string
          image_url: string | null
          ingredients: Json | null
          is_available: boolean | null
          is_featured: boolean | null
          meal_type: string | null
          min_stock_alert: number | null
          name: string
          nutrition: Json
          preparation_time_minutes: number | null
          price: number
          seo_description: string | null
          seo_title: string | null
          sku: string | null
          sort_order: number | null
          stock_quantity: number | null
          tags: string[] | null
          updated_at: string
          variants: Json | null
        }
        Insert: {
          allergens?: string[] | null
          category_id?: string | null
          cost_price?: number | null
          created_at?: string
          created_by?: string | null
          cuisine_type?: string | null
          description?: string | null
          dietary_tags?: string[] | null
          difficulty_level?: string | null
          id?: string
          image_url?: string | null
          ingredients?: Json | null
          is_available?: boolean | null
          is_featured?: boolean | null
          meal_type?: string | null
          min_stock_alert?: number | null
          name: string
          nutrition: Json
          preparation_time_minutes?: number | null
          price: number
          seo_description?: string | null
          seo_title?: string | null
          sku?: string | null
          sort_order?: number | null
          stock_quantity?: number | null
          tags?: string[] | null
          updated_at?: string
          variants?: Json | null
        }
        Update: {
          allergens?: string[] | null
          category_id?: string | null
          cost_price?: number | null
          created_at?: string
          created_by?: string | null
          cuisine_type?: string | null
          description?: string | null
          dietary_tags?: string[] | null
          difficulty_level?: string | null
          id?: string
          image_url?: string | null
          ingredients?: Json | null
          is_available?: boolean | null
          is_featured?: boolean | null
          meal_type?: string | null
          min_stock_alert?: number | null
          name?: string
          nutrition?: Json
          preparation_time_minutes?: number | null
          price?: number
          seo_description?: string | null
          seo_title?: string | null
          sku?: string | null
          sort_order?: number | null
          stock_quantity?: number | null
          tags?: string[] | null
          updated_at?: string
          variants?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "meals_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "meal_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "meals_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      media_library: {
        Row: {
          alt_text: string | null
          caption: string | null
          created_at: string
          created_by: string | null
          file_size: number
          filename: string
          id: string
          mime_type: string
          original_filename: string
          tags: string[] | null
          url: string
        }
        Insert: {
          alt_text?: string | null
          caption?: string | null
          created_at?: string
          created_by?: string | null
          file_size: number
          filename: string
          id?: string
          mime_type: string
          original_filename: string
          tags?: string[] | null
          url: string
        }
        Update: {
          alt_text?: string | null
          caption?: string | null
          created_at?: string
          created_by?: string | null
          file_size?: number
          filename?: string
          id?: string
          mime_type?: string
          original_filename?: string
          tags?: string[] | null
          url?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          email_sent: boolean | null
          id: string
          is_read: boolean | null
          message: string
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email_sent?: boolean | null
          id?: string
          is_read?: boolean | null
          message: string
          title: string
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          email_sent?: boolean | null
          id?: string
          is_read?: boolean | null
          message?: string
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          meal_customizations: Json | null
          meal_id: string
          order_id: string
          quantity: number
          total_price: number
          unit_price: number
        }
        Insert: {
          created_at?: string
          id?: string
          meal_customizations?: Json | null
          meal_id: string
          order_id: string
          quantity?: number
          total_price: number
          unit_price: number
        }
        Update: {
          created_at?: string
          id?: string
          meal_customizations?: Json | null
          meal_id?: string
          order_id?: string
          quantity?: number
          total_price?: number
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_meal_id_fkey"
            columns: ["meal_id"]
            isOneToOne: false
            referencedRelation: "meals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          delivery_address_id: string
          delivery_charge: number | null
          delivery_date: string
          delivery_partner_id: string | null
          delivery_time_slot: string | null
          delivery_tracking_id: string | null
          discount_amount: number | null
          id: string
          order_number: string
          order_type: string
          payment_method: string | null
          payment_reference: string | null
          special_instructions: string | null
          status: string
          subscription_id: string | null
          subtotal: number
          tax_amount: number | null
          total_amount: number
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          delivery_address_id: string
          delivery_charge?: number | null
          delivery_date: string
          delivery_partner_id?: string | null
          delivery_time_slot?: string | null
          delivery_tracking_id?: string | null
          discount_amount?: number | null
          id?: string
          order_number: string
          order_type?: string
          payment_method?: string | null
          payment_reference?: string | null
          special_instructions?: string | null
          status?: string
          subscription_id?: string | null
          subtotal: number
          tax_amount?: number | null
          total_amount: number
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          delivery_address_id?: string
          delivery_charge?: number | null
          delivery_date?: string
          delivery_partner_id?: string | null
          delivery_time_slot?: string | null
          delivery_tracking_id?: string | null
          discount_amount?: number | null
          id?: string
          order_number?: string
          order_type?: string
          payment_method?: string | null
          payment_reference?: string | null
          special_instructions?: string | null
          status?: string
          subscription_id?: string | null
          subtotal?: number
          tax_amount?: number | null
          total_amount?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "orders_delivery_address_id_fkey"
            columns: ["delivery_address_id"]
            isOneToOne: false
            referencedRelation: "delivery_addresses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "user_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          created_at: string
          currency: string | null
          gateway_response: Json | null
          id: string
          order_id: string | null
          payment_gateway: string
          payment_id: string
          payment_method: string | null
          status: string
          subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string | null
          gateway_response?: Json | null
          id?: string
          order_id?: string | null
          payment_gateway?: string
          payment_id: string
          payment_method?: string | null
          status: string
          subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string | null
          gateway_response?: Json | null
          id?: string
          order_id?: string | null
          payment_gateway?: string
          payment_id?: string
          payment_method?: string | null
          status?: string
          subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "user_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      profiles: {
        Row: {
          activity_level: string | null
          created_at: string
          date_of_birth: string | null
          dietary_preference: string | null
          first_name: string | null
          fitness_goals: string[] | null
          food_allergies: string[] | null
          gender: string | null
          height_cm: number | null
          id: string
          last_name: string | null
          medical_conditions: string[] | null
          phone: string | null
          subscription_status: string | null
          updated_at: string
          user_id: string
          username: string | null
          weight_kg: number | null
        }
        Insert: {
          activity_level?: string | null
          created_at?: string
          date_of_birth?: string | null
          dietary_preference?: string | null
          first_name?: string | null
          fitness_goals?: string[] | null
          food_allergies?: string[] | null
          gender?: string | null
          height_cm?: number | null
          id?: string
          last_name?: string | null
          medical_conditions?: string[] | null
          phone?: string | null
          subscription_status?: string | null
          updated_at?: string
          user_id: string
          username?: string | null
          weight_kg?: number | null
        }
        Update: {
          activity_level?: string | null
          created_at?: string
          date_of_birth?: string | null
          dietary_preference?: string | null
          first_name?: string | null
          fitness_goals?: string[] | null
          food_allergies?: string[] | null
          gender?: string | null
          height_cm?: number | null
          id?: string
          last_name?: string | null
          medical_conditions?: string[] | null
          phone?: string | null
          subscription_status?: string | null
          updated_at?: string
          user_id?: string
          username?: string | null
          weight_kg?: number | null
        }
        Relationships: []
      }
      user_meal_calendar: {
        Row: {
          created_at: string
          id: string
          meal_id: string
          meal_type: string
          scheduled_date: string
          status: string | null
          subscription_id: string | null
          swap_count: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          meal_id: string
          meal_type: string
          scheduled_date: string
          status?: string | null
          subscription_id?: string | null
          swap_count?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          meal_id?: string
          meal_type?: string
          scheduled_date?: string
          status?: string | null
          subscription_id?: string | null
          swap_count?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_meal_calendar_meal_id_fkey"
            columns: ["meal_id"]
            isOneToOne: false
            referencedRelation: "meals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_meal_calendar_subscription_id_fkey"
            columns: ["subscription_id"]
            isOneToOne: false
            referencedRelation: "user_subscriptions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_meal_calendar_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_subscriptions: {
        Row: {
          billing_cycle: string
          created_at: string
          current_period_end: string
          current_period_start: string
          delivery_address_id: string | null
          discount_amount: number | null
          end_date: string
          id: string
          meal_plan_id: string
          payment_status: string | null
          special_instructions: string | null
          start_date: string
          status: string
          total_amount: number
          updated_at: string
          user_id: string
        }
        Insert: {
          billing_cycle?: string
          created_at?: string
          current_period_end: string
          current_period_start: string
          delivery_address_id?: string | null
          discount_amount?: number | null
          end_date: string
          id?: string
          meal_plan_id: string
          payment_status?: string | null
          special_instructions?: string | null
          start_date: string
          status?: string
          total_amount: number
          updated_at?: string
          user_id: string
        }
        Update: {
          billing_cycle?: string
          created_at?: string
          current_period_end?: string
          current_period_start?: string
          delivery_address_id?: string | null
          discount_amount?: number | null
          end_date?: string
          id?: string
          meal_plan_id?: string
          payment_status?: string | null
          special_instructions?: string | null
          start_date?: string
          status?: string
          total_amount?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_subscriptions_delivery_address_id_fkey"
            columns: ["delivery_address_id"]
            isOneToOne: false
            referencedRelation: "delivery_addresses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_subscriptions_meal_plan_id_fkey"
            columns: ["meal_plan_id"]
            isOneToOne: false
            referencedRelation: "meal_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_subscriptions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_order_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin: {
        Args: { _user_id: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "editor" | "viewer" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor", "viewer", "user"],
    },
  },
} as const
