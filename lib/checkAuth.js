import { getToken } from "next-auth/jwt";

export async function checkAuth(req) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  if (!token) {
    return {
      authenticated: false,
      redirectUrl: "/login",
    };
  }

  return {
    authenticated: true,
    user: token,
  };
}
