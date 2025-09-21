-- Create admin role system and content management tables

-- Create roles enum
CREATE TYPE public.app_role AS ENUM ('admin', 'editor', 'viewer', 'user');

-- Create user roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_by UUID REFERENCES auth.users(id),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT public.has_role(_user_id, 'admin')
$$;

-- RLS policies for user_roles
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- Create content pages table for dynamic content
CREATE TABLE public.content_pages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    meta_title TEXT,
    meta_description TEXT,
    status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'scheduled')),
    publish_at TIMESTAMP WITH TIME ZONE,
    content JSONB NOT NULL DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_by UUID REFERENCES auth.users(id),
    updated_by UUID REFERENCES auth.users(id)
);

-- Enable RLS on content_pages
ALTER TABLE public.content_pages ENABLE ROW LEVEL SECURITY;

-- Create content sections table
CREATE TABLE public.content_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_id UUID REFERENCES public.content_pages(id) ON DELETE CASCADE,
    type TEXT NOT NULL,
    props JSONB NOT NULL DEFAULT '{}',
    order_index INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on content_sections
ALTER TABLE public.content_sections ENABLE ROW LEVEL SECURITY;

-- Create media library table
CREATE TABLE public.media_library (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    filename TEXT NOT NULL,
    original_filename TEXT NOT NULL,
    file_size INTEGER NOT NULL,
    mime_type TEXT NOT NULL,
    url TEXT NOT NULL,
    alt_text TEXT,
    caption TEXT,
    tags TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_by UUID REFERENCES auth.users(id)
);

-- Enable RLS on media_library
ALTER TABLE public.media_library ENABLE ROW LEVEL SECURITY;

-- Create audit logs table
CREATE TABLE public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    table_name TEXT NOT NULL,
    record_id UUID NOT NULL,
    action TEXT NOT NULL CHECK (action IN ('insert', 'update', 'delete')),
    old_values JSONB,
    new_values JSONB,
    user_id UUID REFERENCES auth.users(id),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on audit_logs
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Create content revisions table
CREATE TABLE public.content_revisions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    page_id UUID REFERENCES public.content_pages(id) ON DELETE CASCADE,
    content JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    created_by UUID REFERENCES auth.users(id),
    message TEXT
);

-- Enable RLS on content_revisions
ALTER TABLE public.content_revisions ENABLE ROW LEVEL SECURITY;

-- RLS policies for content management (admin only)
CREATE POLICY "Admins can manage content pages"
ON public.content_pages
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Published pages are viewable by all"
ON public.content_pages
FOR SELECT
TO authenticated
USING (status = 'published' OR public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage content sections"
ON public.content_sections
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage media"
ON public.media_library
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

CREATE POLICY "Admins can view audit logs"
ON public.audit_logs
FOR SELECT
TO authenticated
USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage content revisions"
ON public.content_revisions
FOR ALL
TO authenticated
USING (public.is_admin(auth.uid()))
WITH CHECK (public.is_admin(auth.uid()));

-- Add updated_at triggers
CREATE TRIGGER update_content_pages_updated_at
    BEFORE UPDATE ON public.content_pages
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_content_sections_updated_at
    BEFORE UPDATE ON public.content_sections
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

-- Update meals table to add more admin fields
ALTER TABLE public.meals ADD COLUMN IF NOT EXISTS sku TEXT;
ALTER TABLE public.meals ADD COLUMN IF NOT EXISTS tags TEXT[] DEFAULT '{}';
ALTER TABLE public.meals ADD COLUMN IF NOT EXISTS variants JSONB DEFAULT '[]';
ALTER TABLE public.meals ADD COLUMN IF NOT EXISTS seo_title TEXT;
ALTER TABLE public.meals ADD COLUMN IF NOT EXISTS seo_description TEXT;
ALTER TABLE public.meals ADD COLUMN IF NOT EXISTS sort_order INTEGER DEFAULT 0;