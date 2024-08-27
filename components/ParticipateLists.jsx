"use client";

import { useState, useEffect } from "react";
import ParticipatePost from "./ParticipatePost";

const ParticipateLists = () => {
  const [participateProjects, setParticipateProjects] = useState([]);

  useEffect(() => {
    const crewInfo = JSON.parse(localStorage.getItem("crewInfo")) || {};
    const participateList = crewInfo.participate || [];
    setParticipateProjects(participateList);
  }, []);

  const handleLikeChange = (title, newLikeState) => {
    setParticipateProjects((prevProjects) =>
      prevProjects.map((project) => (project.title === title ? { ...project, like: newLikeState } : project))
    );

    // localStorage 업데이트
    const crewInfo = JSON.parse(localStorage.getItem("crewInfo")) || {};
    crewInfo.participate = participateProjects.map((project) =>
      project.title === title ? { ...project, like: newLikeState } : project
    );
    localStorage.setItem("crewInfo", JSON.stringify(crewInfo));
  };

  const handleRemoveProject = (title) => {
    setParticipateProjects((prevProjects) => prevProjects.filter((project) => project.title !== title));

    // localStorage 업데이트
    const crewInfo = JSON.parse(localStorage.getItem("crewInfo")) || {};
    crewInfo.participate = crewInfo.participate.filter((project) => project.title !== title);
    localStorage.setItem("crewInfo", JSON.stringify(crewInfo));
  };

  return (
    <div className="w-full mt-9 flex items-center justify-start gap-8 flex-wrap">
      {participateProjects.length > 0 ? (
        participateProjects.map((project, index) => (
          <div key={index} className="relative">
            <ParticipatePost project={project} onLikeChange={handleLikeChange} onRemove={handleRemoveProject} />
          </div>
        ))
      ) : (
        <p className="text-xl font-semibold text-gray-500">참여한 프로젝트가 없습니다.</p>
      )}
    </div>
  );
};

export default ParticipateLists;
