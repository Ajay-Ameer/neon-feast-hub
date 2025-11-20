-- Create table for landing page content management
CREATE TABLE public.landing_page_content (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  section_type TEXT NOT NULL, -- 'hero', 'how_it_works', 'why_choose_us', 'plans', 'testimonials', etc.
  section_key TEXT NOT NULL, -- unique identifier for the section
  content JSONB NOT NULL DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  updated_by UUID REFERENCES auth.users(id),
  UNIQUE(section_type, section_key)
);

-- Enable RLS
ALTER TABLE public.landing_page_content ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view active landing content"
  ON public.landing_page_content
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can manage landing content"
  ON public.landing_page_content
  FOR ALL
  USING (is_admin(auth.uid()))
  WITH CHECK (is_admin(auth.uid()));

-- Create trigger for updated_at
CREATE TRIGGER update_landing_page_content_updated_at
  BEFORE UPDATE ON public.landing_page_content
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default hero section content
INSERT INTO public.landing_page_content (section_type, section_key, content, display_order) VALUES
('hero', 'main_hero', '{
  "title": "Backed by Our Nutritionists. Loved by Your Gut.",
  "subtitle": "Experience the perfect blend of science and nature with our nutritionist-approved meals, delivered in patented smart-packaging that preserves every nutrient, every flavor, just for you.",
  "badges": [
    "Nutritionist Approved",
    "Smart-Packaged",
    "Daily Fresh"
  ],
  "cta_buttons": [
    {
      "text": "Explore our plans",
      "link": "#plans-pricing",
      "variant": "default"
    },
    {
      "text": "Check our yummy meals",
      "link": "#menu-preview",
      "variant": "outline"
    }
  ],
  "carousel_meals": [
    {
      "name": "Nawabi Chicken",
      "image": "nawabi-chicken.png",
      "calories": "450 cal",
      "nutrition": "High Protein"
    },
    {
      "name": "Palak Murgh",
      "image": "palak-murgh.png",
      "calories": "380 cal",
      "nutrition": "Iron Rich"
    },
    {
      "name": "Scrambled Egg Masala",
      "image": "scrambled-egg-masala.png",
      "calories": "320 cal",
      "nutrition": "Balanced"
    },
    {
      "name": "Teriyaki Chicken",
      "image": "teriyaki-chicken.png",
      "calories": "410 cal",
      "nutrition": "Asian Fusion"
    }
  ]
}', 1);