"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logout from "./Logout";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";
import { atomIsShowUserInfo } from "@/hook/recoil/showUserInfo";

const UserInfo = ({ session }) => {
  const router = useRouter();
  const setShowUserInfo = useSetRecoilState(atomIsShowUserInfo);
  const [participatingProjects, setParticipatingProjects] = useState(0);

  useEffect(() => {
    const crewInfo = JSON.parse(localStorage.getItem("crewInfo")) || {};
    const participateCount = crewInfo.participate?.length || 0;
    setParticipatingProjects(participateCount);
  }, []);

  const handleMyInfoClick = () => {
    if (session?.user?.name) {
      router.replace(`/myStance/${session.user.name}`, undefined, { shallow: true });
    }
    setShowUserInfo(false);
  };

  const handleParticipateClick = () => {
    if (session?.user?.name) {
      router.replace(`/myStance/${session.user.name}/participate`);
    }
    setShowUserInfo(false);
  };

  return (
    <div className="w-72 h-[550px] absolute top-12 right-0 z-50 rounded-xl ring-1 ring-black/80 p-1 bg-white">
      {/* USER_CARD */}
      <div
        className="bg-[#474747] w-full h-[55%] rounded-lg flex flex-col justify-center items-center gap-3
      text-white"
      >
        <Image
          src={session?.user?.image}
          alt={session?.user?.name}
          width={120}
          height={120}
          className="rounded-full w-24 h-24"
        />
        {/* 사용자 이름 */}
        <p className="text-xl font-semibold truncate w-56 text-center">{session?.user?.name}</p>
        {/* 프로젝트 정보 */}
        <div className="flex justify-center items-center text-base gap-1">
          <p>참여중인 프로젝트 : </p>
          <p>{participatingProjects}개</p>
        </div>
        {/* 대시보드 */}
        <button
          className="w-52 h-11 bg-black rounded-full mt-2 text-white text-base font-semibold 
        hover:ring-2 hover:ring-white/30  cursor-default"
        >
          대시보드
        </button>
      </div>
      <div className="w-full h-[45%] flex flex-col justify-between px-8 py-7">
        {/* USER_INFO */}
        <div className="text-[#4f4f4f] text-lg font-bold w-full h-28 flex flex-col justify-between items-start">
          <p onClick={handleMyInfoClick} className="cursor-pointer hover:text-blue-500">
            나의 정보
          </p>
          <p>계정 설정</p>
          <p onClick={handleParticipateClick} className="cursor-pointer hover:text-blue-500">
            참여 프로젝트
          </p>
        </div>
        <div className="bg-line w-60 h-[0.1rem] rounded-full" />
        {/* LOGOUT */}
        <Logout />
      </div>
    </div>
  );
};

export default UserInfo;
