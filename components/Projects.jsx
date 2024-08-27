import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import { JoinButton } from "./JoinButton";
import { Contents, Header, Info, TeamInfo, Title } from "./ProjectsContents";
import { Message } from "./Message";

const Projects = ({ projectData, showMessage, onClose, onJoinProject }) => {
  const [isParticipating, setIsParticipating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 컴포넌트 마운트 시 localStorage에서 crewInfo 확인
    const crewInfo = JSON.parse(localStorage.getItem("crewInfo")) || {};
    const isAlreadyParticipating = crewInfo.participate?.some((project) => project.title === projectData.title);
    setIsParticipating(isAlreadyParticipating);
    setIsLoading(false);
  }, [projectData.title]);

  const handleJoinProject = () => {
    // localStorage에서 crewInfo 가져오기
    const crewInfo = JSON.parse(localStorage.getItem("crewInfo")) || {};

    // participate 배열이 없으면 새로 만들기
    if (!crewInfo.participate) {
      crewInfo.participate = [];
    }

    // 이미 참여 중인 프로젝트인지 다시 한 번 확인
    const isAlreadyParticipating = crewInfo.participate.some((project) => project.title === projectData.title);

    if (!isAlreadyParticipating) {
      // projectData를 participate 배열에 추가
      crewInfo.participate.push(projectData);

      // 수정된 crewInfo를 localStorage에 저장
      localStorage.setItem("crewInfo", JSON.stringify(crewInfo));

      // 참여 상태 업데이트
      setIsParticipating(true);

      // 부모 컴포넌트의 onJoinProject 함수 호출 (필요한 경우)
      if (onJoinProject) {
        onJoinProject(projectData);
      }
    }
  };

  return (
    <Modal onClose={onClose}>
      <div className="w-full h-full flex flex-col justify-center px-10 gap-5 relative">
        {!showMessage ? (
          <>
            {projectData.like && <Header />}
            <Title title={projectData.title} />
            <Info leader={projectData.leader} date={projectData.date} />
            <Contents description={projectData.description} />
            <TeamInfo teamInfo={projectData.teamInfo} />
            {!isLoading && !isParticipating && (
              <div className="flex justify-end items-end">
                <JoinButton title="프로젝트 참여" style="bg-accent text-white" onClick={handleJoinProject} />
              </div>
            )}
          </>
        ) : (
          <Message />
        )}
      </div>
    </Modal>
  );
};

export default Projects;
