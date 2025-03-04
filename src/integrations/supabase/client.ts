
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://grnilhcmwnrqxrfgnxps.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdybmlsaGNtd25ycXhyZmdueHBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNDY3NTQsImV4cCI6MjA1NjYyMjc1NH0.g3SIL43aBStuA0KRonJNFLmLKFs1jcKTjEVa7oABPcg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
