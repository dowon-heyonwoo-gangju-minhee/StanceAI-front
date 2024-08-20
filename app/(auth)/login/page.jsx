"use client";

import { signIn } from "next-auth/react";

const LoginPage = () => {
  return (
    <div>
      <button onClick={() => signIn("github", { callbackUrl: "/" })}>GitHub로 로그인</button>
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>Google로 로그인</button>
    </div>
  );
};

export default LoginPage;
