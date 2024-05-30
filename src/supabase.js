import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rggphtdglnfskbjmbbna.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnZ3BodGRnbG5mc2tiam1iYm5hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2ODY1MDAsImV4cCI6MjAzMTI2MjUwMH0.doRKXm4tgm56tAwKs9I52QYRiVmqJuFSdt8rqFl6_T8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
