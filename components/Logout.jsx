import { socialLogout } from "@/app/actions";

const Logout = () => {
  return (
    <form action={socialLogout}>
      <button type="submit">Logout</button>
    </form>
  );
};

export default Logout;
