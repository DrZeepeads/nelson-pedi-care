import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://rkozqswowciqsefdpmwk.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrb3pxc3dvd2NpcXNlZmRwbXdrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1NTc0MjEsImV4cCI6MjA1NzEzMzQyMX0.Eo6hzTXjzitquk-14j8VdqAb-pJEE7c_rAehweJZGSQ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
