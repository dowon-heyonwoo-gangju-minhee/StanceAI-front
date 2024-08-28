"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import UserInfo from "./UserInfo";
import { useEffect, useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { atomIsShowUserInfo, atomUserLoginInfo } from "@/hook/recoil/showUserInfo";

const tabs = [
  { key: 1, title: "프로젝트", link: "/" },
  { key: 2, title: "멤버찾기", link: "/member/search" },
];

const Navbar = ({ session }) => {
  const pathname = usePathname();
  const router = useRouter();
  const userInfoRef = useRef(null);

  const setUserSession = useSetRecoilState(atomUserLoginInfo);
  const [showUserInfo, setShowUserInfo] = useRecoilState(atomIsShowUserInfo);

  const isActiveTab = (tabLink) => {
    if (tabLink === "/") {
      return pathname === "/" || pathname.startsWith("/projects") || pathname.startsWith("/login");
    }
    return pathname === tabLink;
  };

  useEffect(() => {
    if (session) setUserSession(session.user);
  }, [session, setUserSession]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userInfoRef.current && !userInfoRef.current.contains(event.target)) {
        setShowUserInfo(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (session) {
      setUserSession(session.user);

      const storedProjectInfo = JSON.parse(localStorage.getItem("projectInfo") || "[]");

      const updatedProjectInfo = storedProjectInfo.map((project) => ({
        ...project,
        crewInfo: {
          ...project.crewInfo,
          userName: session.user.name,
          userEmail: session.user.email,
          nickName: project.crewInfo?.nickName || session.user.name,
        },
      }));
      localStorage.setItem("projectInfo", JSON.stringify(updatedProjectInfo));
    }
  }, [session, setUserSession]);

  const handleLoginClick = () => {
    router.push("/login");
  };

  const shouldShowTabs = () => {
    return (
      (pathname === "/" ||
        pathname.startsWith("/member") ||
        pathname.startsWith("/projects") ||
        pathname === "/login") &&
      !pathname.includes("participate") &&
      !pathname.includes("myStance")
    );
  };

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
        {shouldShowTabs() && (
          <div
            className="w-72 h-16 ring-4 ring-line bg-white rounded-full flex justify-center items-center 
      px-2 py-[0.42rem] font-medium drop-shadow-md"
          >
            {tabs.map((tab) => (
              <Link href={tab.link} className="flex-1" key={tab.key}>
                <div
                  className={`flex-1 text-2xl h-12 w-full justify-center items-center font-semibold 
                flex rounded-full ${isActiveTab(tab.link) ? "bg-black text-white" : "text-black"}`}
                >
                  {tab.title}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      {/* NAV_LEFT */}
      <div className="flex justify-center items-center gap-5">
        <GoBell className="text-[#AFAFAF]" size={40} />
        {session ? (
          <div className="relative" ref={userInfoRef}>
            <Image
              src={session?.user?.image}
              alt={session?.user?.name}
              width={70}
              height={70}
              className="rounded-full w-[40px] h-[40px] cursor-pointer"
              onClick={() => setShowUserInfo((prev) => !prev)}
            />
            <div
              className={`absolute top-0 right-0 bottom-full mb-2 transition-all duration-300 ease-in-out z-50
                ${showUserInfo ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`}
            >
              <UserInfo session={session} />
            </div>
          </div>
        ) : (
          <FaRegUserCircle className="text-black cursor-pointer" size={40} onClick={handleLoginClick} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
