import { createClient } from "@supabase/supabase-js";
import { type Database } from "@/database.types";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// 서버와 통신하는, 서버에 요청을 보내는 클라이언트
const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
