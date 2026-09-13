import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '../config/env'

const missingEnv = !SUPABASE_URL || !SUPABASE_ANON_KEY

if (missingEnv) {
  console.warn('[Supabase] Env tidak terdeteksi. Isi frontend/.env dengan VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY, lalu restart dev server.')
}

export const supabase = missingEnv
  ? null
  : createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
