import { signInWithOAuth, signInWithPwAction } from "@/api/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { Link } from "react-router";
import githubLogo from "@/assets/github-mark.svg";

export default function SignInPage() {
  // 비동기 작업을 관리
  const [state, formAction, isPending] = useActionState(signInWithPwAction, {
    user: null,
    session: null,
  });

  const handleSignInWithGithub = () => {
    signInWithOAuth("github");
  };

  return (
    <div className="mx-auto flex max-w-[58%] flex-col gap-8">
      <h2 className="mx-auto text-xl font-bold">로그인</h2>

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
          {isPending ? "로그인중..." : "로그인"}
        </Button>
        <div className="text-muted-foreground relative mx-auto flex w-full items-center py-2">
          <span className="absolute left-0 h-px w-full border-t-1"></span>
          <span className="relative mx-auto bg-white px-2">또는</span>
        </div>
        <Button
          className="w-full py-6"
          variant={"outline"}
          onClick={handleSignInWithGithub}
        >
          <img className="h-5" src={githubLogo} />
          Github 계정으로 로그인
        </Button>
      </form>

      <div className="flex w-full flex-col items-center gap-2">
        <p>아직 계정이 없다면?</p>
        <Link className="text-muted-foreground hover:underline" to={"/sign-up"}>
          회원가입
        </Link>
      </div>
    </div>
  );
}
