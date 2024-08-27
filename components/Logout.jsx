import { socialLogout } from "@/app/actions";

const Logout = () => {
  return (
    <form action={socialLogout}>
      <button type="submit" className="text-[#4f4f4f] font-bold text-lg">
        로그아웃
      </button>
    </form>
  );
};

export default Logout;
