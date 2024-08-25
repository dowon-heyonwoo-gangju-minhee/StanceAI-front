import Image from "next/image";
import Logout from "@/components/Logout";

import { auth } from "@/lib/auth";
import SelectBox from "@/components/SelectBox";
import Search from "@/components/Search";

export const metadata = {
  title: "home",
};

const HomePage = async () => {
  const session = await auth();
  console.log(session?.user);
  return (
    <div>
      {session ? (
        <>
          <h1>{session?.user?.name}</h1>
          <Image src={session?.user?.image} alt={session?.user?.name} width={70} height={70} className="rounded-full" />
          <Logout />
        </>
      ) : (
        <div className="w-full flex justify-between items-center mt-16">
          <SelectBox />
          <Search />
        </div>
      )}
    </div>
  );
};

export default HomePage;
