"use client";

import { useState, useEffect } from "react";
import ProjectsClient from "@/components/ProjectsClient";

const ClientParticipateProjectPage = ({ projectId }) => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    const decodedProjectName = decodeURIComponent(projectId).replace(/-/g, " ");

    // localStorage에서 allProjects 데이터를 가져옵니다.
    const allProjects = JSON.parse(localStorage.getItem("allProjects") || "{}");

    if (allProjects.projectInfo) {
      const project = allProjects.projectInfo.find(
        (p) => p.projectName.toLowerCase() === decodedProjectName.toLowerCase()
      );

      if (project) {
        setProjectData({
          title: project.projectName,
          like: project.like,
          leader: project.crewInfo.nickName,
          date: new Date(project.expectedProjectDuration.startDate).toLocaleDateString(),
          description: project.description,
          teamInfo: {
            members: project.recruitmentInfo.length.toString(),
            duration: `${Math.round(
              (new Date(project.expectedProjectDuration.endDate) -
                new Date(project.expectedProjectDuration.startDate)) /
                (1000 * 60 * 60 * 24 * 30)
            )} 개월`,
            position: project.recruitmentInfo[0].position,
            deadline: new Date(project.recruitmentInfo[0].expectedRecruitmentDuration.endDate).toLocaleDateString(),
            tools: project.recruitmentInfo[0].tools.map((tool) => tool.stackName),
          },
        });
      }
    }
  }, [projectId]);

  return <>{projectData ? <ProjectsClient projectData={projectData} /> : <div>Project not found</div>}</>;
};

export default ClientParticipateProjectPage;
