import supabase from "@/lib/supabase";
import type { AuthError, Provider } from "@supabase/supabase-js";

type AuthState = { user: any; session: any; error?: AuthError } | null;

// supabase를 이용해 서버에 회원가입 요청 & 결과 반환하는 비동기 함수
export async function signUpAction(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = (formData.get("email") as string).trim();
  const password = (formData.get("password") as string).trim();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    // throw error;
    return { ...data, error };
  }
  return data;
}

export async function signInWithPwAction(
  prevState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = (formData.get("email") as string).trim();
  const password = (formData.get("password") as string).trim();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    // throw error;
    return { ...data, error };
  }
  return data;
}

export async function signInWithOAuth(provider: Provider) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
  });

  if (error) throw error;
  return data;
}
