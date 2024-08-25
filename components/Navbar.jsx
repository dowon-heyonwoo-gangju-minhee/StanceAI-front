"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { GoBell } from "react-icons/go";

const tabs = [
  { key: 1, title: "프로젝트", link: "/" },
  { key: 2, title: "멤버찾기", link: "/member/search" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="max-w-[1920px] flex items-center justify-between">
      {/* NAV_RIGHT */}
      <div className="flex justify-center items-center gap-16">
        {/* 로고 */}
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="logo"
            role="로고이미지"
            draggable="false"
            width={240}
            height={62}
            className="w-44 h-20"
          />
        </Link>
        {/* TAB */}
        <div
          className="w-72 h-16 ring-4 ring-line bg-white rounded-full flex justify-center items-center 
      px-2 py-[0.42rem] font-medium drop-shadow-md"
        >
          {tabs.map((tab) => (
            <Link href={tab.link} className="flex-1" key={tab.key}>
              <div
                className={`flex-1 text-2xl h-12 w-full justify-center items-center font-semibold 
                  flex rounded-full ${pathname === tab.link ? "bg-black text-white" : "text-black"}`}
              >
                {tab.title}
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* NAV_LEFT */}
      <div className="flex justify-center items-center gap-5">
        <GoBell className="text-[#AFAFAF]" size={40} />
        <FaRegUserCircle className="text-black" size={40} />
      </div>
    </div>
  );
};

export default Navbar;
