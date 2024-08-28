import { getToken } from "next-auth/jwt";

export async function checkAuth(req) {
  try {
    const token = await getToken({ req });
    console.log("Token:", token); // 디버깅을 위한 로그

    if (!token) {
      console.log("No token found"); // 디버깅을 위한 로그
      return {
        authenticated: false,
        redirectUrl: "/login",
      };
    }

    console.log("User authenticated"); // 디버깅을 위한 로그
    return {
      authenticated: true,
      user: token,
    };
  } catch (error) {
    console.error("Error in checkAuth:", error);
    return {
      authenticated: false,
      redirectUrl: "/login",
    };
  }
}
