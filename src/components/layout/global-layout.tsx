import { Link, Outlet } from "react-router";
import logo from "@/assets/logo.png";
import { SunIcon } from "lucide-react";
import defaultAvatar from "@/assets/default-avatar.jpg";

export default function GlobalLayout() {
  return (
    <>
      <div className="flex min-h-[100vh] flex-col">
        <header className="h-15 border-b">
          <div className="mx-auto flex h-full w-full max-w-[728px] items-center justify-between px-4">
            <Link to={"/"} className="items-cetner flex gap-2">
              <img className="h-5" src={logo} alt="사이트 로고" />
              <h1 className="font-bold">한입 로그</h1>
            </Link>

            <div className="flex items-center gap-5">
              <button className="hover:bg-muted cursor-pointer rounded-full p-2">
                <SunIcon className="h-6" />
              </button>

              <button className="h-6 w-6 cursor-pointer overflow-hidden rounded-full">
                <img
                  className="h-full w-full object-cover"
                  src={defaultAvatar}
                  alt="프로필"
                />
              </button>
            </div>
          </div>
        </header>
        <main className="mx-auto w-full max-w-[728px] flex-1 border-x px-4 py-6">
          <Outlet />
        </main>
        <footer className="text-muted-foreground flex items-center border-t py-10">
          <p className="mx-auto max-w-[728px]">@minjoo</p>
        </footer>
      </div>
    </>
  );
}
