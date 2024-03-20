import { createClient } from 'supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabasePublicKey = process.env.SUPABASE_PUBLIC_KEY

const supabase = createClient(
    supabaseUrl,
    supabasePublicKey
);

export default supabase;