"use server";

import { signIn, signOut } from "@/lib/auth";

export async function socialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/projects" });
}

export async function socialLogout() {
  await signOut({ redirectTo: "/" });
}
