import { createClient } from "@supabase/supabase-js";

// Replace these with your Supabase project credentials
const supabaseUrl = "https://uqrgxrzbqbtenxzmsrkp.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxcmd4cnpicWJ0ZW54em1zcmtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzNTQ3NTksImV4cCI6MjA3OTkzMDc1OX0.GBBHsiPtZtzFiCyU3ew8qlSb410Oa_l0RVrsaIGCwh0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
