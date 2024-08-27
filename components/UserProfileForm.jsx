"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { atomUserLoginInfo } from "@/hook/recoil/showUserInfo";

import { JoinButton } from "./JoinButton";
import UserPosition from "./UserPosition";
import UserTools from "./UserTools";
import { useRouter } from "next/navigation";
import Toast from "./Toast";

const UserProfileForm = () => {
  const router = useRouter();
  const [crewInfo, setCrewInfo] = useState({
    nickName: "",
    position: "",
    tools: [],
    years: 0,
    projectCount: 0,
    introduce: "",
  });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const savedCrewInfo = localStorage.getItem("crewInfo");
    if (savedCrewInfo) {
      const parsedCrewInfo = JSON.parse(savedCrewInfo);
      setCrewInfo((prevState) => ({
        ...prevState,
        ...parsedCrewInfo,
        nickName: parsedCrewInfo.nickName || "",
        position: parsedCrewInfo.position || "",
        tools: parsedCrewInfo.tools || [],
        years: parsedCrewInfo.years || 0,
        projectCount: parsedCrewInfo.projectCount || 0,
        introduce: parsedCrewInfo.introduce || "",
      }));
    }
  }, []);

  const handleChange = useCallback((field, value) => {
    setCrewInfo((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const handlePositionSelect = useCallback(
    (position) => {
      handleChange("position", position);
    },
    [handleChange]
  );

  const handleToolSelect = useCallback((selectedTools) => {
    setCrewInfo((prev) => ({
      ...prev,
      tools: selectedTools.map((tool) => ({ stackName: tool })),
    }));
  }, []);

  const handleSubmit = useCallback(() => {
    localStorage.setItem("crewInfo", JSON.stringify(crewInfo));
    console.log("Saved crew info:", crewInfo);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      router.push("/"); // 홈으로 이동
    }, 2000); // 2초 후 홈으로 이동
  }, [crewInfo, router]);

  const handleNumberInput = useCallback(
    (field) => (e) => {
      const value = Math.max(0, parseInt(e.target.value) || 0);
      handleChange(field, value);
    },
    [handleChange]
  );

  const isProfileComplete = useMemo(() => {
    return (
      crewInfo.nickName !== "" &&
      crewInfo.position !== "" &&
      crewInfo.tools.length > 0 &&
      crewInfo.years > 0 &&
      crewInfo.projectCount > 0 &&
      crewInfo.introduce !== ""
    );
  }, [crewInfo]);

  const buttonTitle = isProfileComplete ? "수정하기" : "등록하기";

  return (
    <>
      <div className="w-full h-full flex flex-col gap-20 relative">
        <div className="flex items-center justify-start gap-32">
          {/* 닉네임 */}
          <div className="flex justify-center items-center gap-6">
            <p className="text-[#4f4f4f] text-lg font-bold">닉네임</p>
            <input
              type="text"
              placeholder="닉네임 입력"
              value={crewInfo.nickName}
              onChange={(e) => handleChange("nickName", e.target.value)}
              className="ring-2 ring-line rounded-full w-44 h-9 p-3 outline-none bg-transparent"
            />
          </div>
          {/* 소개글 */}
          <div className="flex justify-center items-center gap-6">
            <p className="text-[#4f4f4f] text-lg font-bold">소개글</p>
            <input
              type="text"
              placeholder="본업을 소개하는 글을 간단히 작성해주세요. (최대 50자)"
              maxLength={50}
              value={crewInfo.introduce}
              onChange={(e) => handleChange("introduce", e.target.value)}
              className="ring-2 ring-line rounded-full w-[800px] h-9 p-3 outline-none bg-transparent"
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-32">
          {/* 포지션 */}
          <div className="flex justify-center items-center gap-6">
            <p className="text-lg text-[#4f4f4f] font-bold">포지션</p>
            <UserPosition onSelect={handlePositionSelect} initialPosition={crewInfo.position} />
          </div>
          {/* 활용 툴 */}
          <div className="flex justify-center items-center gap-6">
            <p className="text-lg text-[#4f4f4f] font-bold">활용 툴</p>
            <UserTools
              onSelect={handleToolSelect}
              selectedTools={crewInfo?.tools?.map((tool) => tool.stackName) || []}
            />
          </div>
          {/* 연차(경력) */}
          <div className="flex justify-center items-center gap-6">
            <p className="text-[#4f4f4f] text-lg font-bold">{"연차(경력)"}</p>
            <input
              type="number"
              min="0"
              placeholder="년수 입력"
              value={crewInfo.years}
              onChange={handleNumberInput("years")}
              className="ring-2 ring-line rounded-full w-44 h-9 p-3 outline-none bg-transparent"
            />
            <span>년</span>
          </div>
          {/* 프로젝트 참여 횟수 */}
          <div className="flex justify-center items-center gap-6">
            <p className="text-[#4f4f4f] text-lg font-bold">프로젝트 참여 횟수</p>
            <input
              type="number"
              min="0"
              placeholder="횟수 입력"
              value={crewInfo.projectCount}
              onChange={handleNumberInput("projectCount")}
              className="ring-2 ring-line rounded-full w-44 h-9 p-3 outline-none bg-transparent"
            />
            <span>회</span>
          </div>
        </div>
        <div className="absolute right-0 bottom-24">
          <JoinButton
            title={buttonTitle}
            style="bg-white ring-2 ring-accent text-accent hover:text-white"
            onClick={handleSubmit}
          />
        </div>
      </div>
      {showToast && (
        <Toast
          message="기록 완료"
          contents="Stance 회원 정보가 기록되었습니다."
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default UserProfileForm;
