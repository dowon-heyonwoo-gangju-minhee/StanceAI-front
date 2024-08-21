"use server";

import { signIn, signOut } from "@/lib/auth";

export async function socialLogin(formData) {
  const action = formData.get("action");
  await signIn(action, { redirectTo: "/post" });
}

export async function socialLogout() {
  await signOut({ redirectTo: "/" });
}
