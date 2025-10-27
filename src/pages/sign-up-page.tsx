import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signUpAction } from "@/api/auth";
import { useActionState } from "react";
import { Link } from "react-router";

export default function SignUpPage() {
  // 비동기 작업을 관리
  const [state, formAction, isPending] = useActionState(signUpAction, {
    user: null,
    session: null,
  });

  return (
    <div className="mx-auto flex max-w-[58%] flex-col gap-8">
      <h2 className="mx-auto text-xl font-bold">회원가입</h2>

      <form action={formAction} className="flex flex-col gap-3">
        <Input
          name="email"
          className="py-6"
          type="email"
          placeholder="이메일"
          autoComplete="username"
        />
        <Input
          name="password"
          className="py-6"
          type="password"
          placeholder="비밀번호"
          autoComplete="current-password"
        />
        {state?.error && <p className="text-red-400">{state.error.message}</p>}
        <Button className="w-full py-6" type="submit">
          {isPending ? "가입중..." : "회원가입"}
        </Button>
      </form>

      <div className="flex w-full flex-col items-center gap-2">
        <p>이미 계정이 있다면?</p>
        <Link className="text-muted-foreground hover:underline" to={"/sign-in"}>
          로그인
        </Link>
      </div>
    </div>
  );
}
