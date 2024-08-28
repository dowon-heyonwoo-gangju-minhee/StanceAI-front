"use client";

import { useState, useEffect } from "react";
import RegisterCrewInfo from "@/components/RegisterCrewInfo";
import RegisterProjectInfo from "@/components/RegisterProjectInfo";
import { message } from "antd";
import { JoinButton } from "@/components/JoinButton";
import { useThrottle } from "@/hook/useThrottle";
import { useRouter } from "next/navigation";

const RegisterProject = () => {
  const router = useRouter();

  const [projectInfo, setProjectInfo] = useState({
    projectName: "",
    expectedProjectDuration: {
      duration: "",
      startDate: "",
      endDate: "",
    },
    description: "",
    expectedRecruitmentDuration: {
      duration: "",
      startDate: "",
      endDate: "",
    },
    like: false,
  });
  const [recruitmentInfo, setRecruitmentInfo] = useState([
    {
      position: "",
      tools: [],
      year: 0,
      expectedRecruitmentDuration: {
        duration: "",
        startDate: "",
        endDate: "",
      },
    },
  ]);

  const [isFormValid, setIsFormValid] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  useEffect(() => {
    const isProjectInfoValid = Boolean(
      projectInfo.projectName &&
        projectInfo.expectedProjectDuration?.duration &&
        projectInfo.expectedProjectDuration?.startDate &&
        projectInfo.expectedProjectDuration?.endDate &&
        projectInfo.description
    );

    const isRecruitmentInfoValid =
      recruitmentInfo.length > 0 &&
      Boolean(
        recruitmentInfo[0].position &&
          recruitmentInfo[0].tools.length > 0 &&
          recruitmentInfo[0].year > 0 &&
          recruitmentInfo[0].expectedRecruitmentDuration?.duration &&
          recruitmentInfo[0].expectedRecruitmentDuration?.startDate &&
          recruitmentInfo[0].expectedRecruitmentDuration?.endDate
      );

    const newIsFormValid = isProjectInfoValid && isRecruitmentInfoValid;

    setIsFormValid(newIsFormValid);
  }, [projectInfo, recruitmentInfo]);

  const showMessage = (type, content) => {
    setIsMessageVisible(true);
    message[type]({
      content,
      style: {
        marginTop: "20vh",
        zIndex: 1000,
      },
      duration: 3,
    });
    setTimeout(() => setIsMessageVisible(false), 3000);
  };

  const handleSubmit = () => {
    if (!isFormValid) {
      showMessage("error", "모든 필드를 채워주세요.");
      return;
    }

    try {
      const allProjects = JSON.parse(localStorage.getItem("allProjects")) || { projectInfo: [] };
      const crewInfo = JSON.parse(localStorage.getItem("crewInfo")) || {};

      const newProject = {
        ...projectInfo,
        crewInfo: {
          userName: crewInfo.userName || "",
          userEmail: crewInfo.userEmail || "",
          nickName: crewInfo.nickName || "",
        },
        creator: crewInfo.userName || "",
        recruitmentInfo: recruitmentInfo,
      };
      allProjects.projectInfo.push(newProject);

      localStorage.setItem("allProjects", JSON.stringify(allProjects));

      showMessage("success", "프로젝트가 성공적으로 등록되었습니다.");

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.error("프로젝트 생성 실패:", error);
      showMessage("error", "프로젝트를 생성하는 데 실패했습니다.");
    }
  };

  const throttledHandleSubmit = useThrottle(handleSubmit, 2000);

  return (
    <>
      <div className="py-10 gap-14 flex flex-col justify-start">
        <h1 className="text-5xl text-accent font-bold">{"나의 '프로젝트'Stance는?"}</h1>
        <div>
          <h4 className="font-semibold text-2xl text-[#989898]">01 프로젝트 정보</h4>
          <RegisterProjectInfo setProjectInfo={setProjectInfo} />
        </div>
        <div>
          <h4 className="font-semibold text-2xl text-[#989898]">02 구인자 정보</h4>
          <RegisterCrewInfo setRecruitmentInfo={setRecruitmentInfo} setProjectInfo={setProjectInfo} />
        </div>
        <div className="flex justify-end items-end">
          <JoinButton
            title="프로젝트 생성"
            style={`${
              isFormValid
                ? "bg-white ring-2 ring-accent text-accent hover:bg-accent hover:text-white"
                : "bg-white text-accent ring-2 ring-accent hover:bg-white hover:text-accent cursor-default"
            }`}
            onClick={throttledHandleSubmit}
            disabled={!isFormValid}
          />
        </div>
      </div>
      {isMessageVisible && <div className="fixed inset-0 bg-white/50 z-40 backdrop-blur-sm"></div>}
    </>
  );
};

export default RegisterProject;
