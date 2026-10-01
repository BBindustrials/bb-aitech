/* eslint-disable @typescript-eslint/no-explicit-any */
export type ProductStatus = 'live' | 'beta' | 'development' | 'planned';

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string | null;
  description: string;
  problem_statement: string | null;
  solution_overview: string | null;
  features: string[];
  status: ProductStatus;
  status_badge: string | null;
  hero_image_url: string | null;
  logo_url: string | null;
  documentation_url: string | null;
  demo_url: string | null;
  cta_text: string;
  cta_link: string | null;
  display_order: number;
  is_featured: boolean;
  seo_title: string | null;
  seo_description: string | null;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  is_featured: unknown;
  author: string;
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  content: string;
  featured_image_url: string | null;
  author_id: string | null;
  category: string;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  published_at: string | null;
  seo_title: string | null;
  seo_description: string | null;
  view_count: number;
  created_at: string;
  updated_at: string;
}

export interface Lead {
  id: string;
  email: string;
  full_name: string;
  company_name: string | null;
  phone: string | null;
  industry: string | null;
  interest_area: string | null;
  message: string | null;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  source: string | null;
  created_at: string;
}

export interface DemoRequest {
  id: string;
  lead_id: string | null;
  product_id: string | null;
  product_interest: string;
  institution_name: string;
  institution_type: 'school' | 'university' | 'business' | 'healthcare' | 'rehabilitation' | 'government' | 'other';
  team_size: string | null;
  preferred_date: string | null;
  preferred_time_slot: string | null;
  additional_requirements: string | null;
  status: 'pending' | 'scheduled' | 'completed' | 'cancelled';
  scheduled_demo_at: string | null;
  created_at: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  short_description: string | null;
  full_description: string | null;
  icon_name: string | null;
  features: string[];
  pricing_model: string | null;
  is_active: boolean;
  display_order: number;
}

export interface SiteSetting {
  id: string;
  setting_key: string;
  setting_value: any;
  setting_group: string;
  description: string | null;
}

export type AdminRole = 'super_admin' | 'content_manager' | 'lead_viewer';

export interface AdminUser {
  id: string;
  user_id: string;
  email: string;
  role: AdminRole;
  full_name: string | null;
  avatar_url: string | null;
  is_active: boolean;
  last_login: string | null;
}