import HomePage from "@/app/home/page";
import ParticipatePage from "@/app/myStance/[userId]/participate/page";
import ProjectsClient from "@/components/ProjectsClient";
import { allProjects } from "@/data/allProjects";

const ParticipateProjectPage = ({ params }) => {
  const projectId = params.id;

  const decodedProjectName = decodeURIComponent(projectId).replace(/-/g, " ");

  // 대소문자를 구분하지 않고 프로젝트를 찾습니다
  const project = allProjects.projectInfo.find((p) => p.projectName.toLowerCase() === decodedProjectName.toLowerCase());

  let projectData = null;
  if (project) {
    projectData = {
      title: project.projectName,
      like: project.like,
      leader: project.crewInfo.nickName,
      date: new Date(project.expectedProjectDuration.startDate).toLocaleDateString(),
      description: project.description,
      teamInfo: {
        members: project.recruitmentInfo.length.toString(),
        duration: `${Math.round(
          (new Date(project.expectedProjectDuration.endDate) - new Date(project.expectedProjectDuration.startDate)) /
            (1000 * 60 * 60 * 24 * 30)
        )} 개월`,
        position: project.recruitmentInfo[0].position,
        deadline: new Date(project.expectedRecruitmentDuration.endDate).toLocaleDateString(),
        tools: project.tools.map((tool) => tool.stackName),
      },
    };
  }

  return (
    <>
      <ParticipatePage />
      {projectData ? <ProjectsClient projectData={projectData} /> : <div>Project not found</div>}
    </>
  );
};

export default ParticipateProjectPage;
