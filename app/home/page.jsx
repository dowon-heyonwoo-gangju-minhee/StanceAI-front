import Image from "next/image";
import Logout from "@/components/Logout";

import { auth } from "@/lib/auth";

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
        "HomePage입니다"
      )}
    </div>
  );
};

export default HomePage;
