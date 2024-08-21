import { socialLogin } from "@/app/actions";

const LoginForm = () => {
  return (
    <form action={socialLogin}>
      <button type="submit" name="action" value="google">
        Google
      </button>
      <button type="submit" name="action" value="github">
        Github
      </button>
    </form>
  );
};

export default LoginForm;
