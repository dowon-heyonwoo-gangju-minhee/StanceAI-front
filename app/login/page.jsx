import LoginForm from "@/components/LoginForm";
import HomePage from "../home/page";

export const metadata = {
  title: "login",
};

const LoginPage = () => {
  return (
    <div>
      <HomePage />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
