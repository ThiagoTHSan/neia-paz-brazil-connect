import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// WHY: anon key no front é esperado; o que protege dados é RLS/policies no Supabase.
if (!url?.trim() || !anonKey?.trim()) {
  console.warn(
    "[Supabase] Defina VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY em .env.local e reinicie o Vite (npm run dev)."
  );
}

/** Cliente Supabase para o browser (usa a chave anon do painel). */
export const supabase = createClient(url ?? "", anonKey ?? "");
