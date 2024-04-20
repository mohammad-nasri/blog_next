const {NEXT_PUBLIC_SUPABASE_URL: supabaseUrl} = process.env
const {NEXT_PUBLIC_SUPABASE_ANON_KEY: supabaseAnonKey} = process.env
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
