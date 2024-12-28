import { createClient } from '@supabase/supabase-js';

// Environment variables
export const config = {
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL as string,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string,
  },
  sendgrid: {
    apiKey: import.meta.env.VITE_SENDGRID_API_KEY as string,
  }
};

// Create Supabase client
export const supabase = createClient(config.supabase.url, config.supabase.anonKey);