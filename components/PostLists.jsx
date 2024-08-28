"use client";

import { useEffect } from "react";
import Post from "./Post";
import { useRecoilState } from "recoil";
import { atomFilterLists } from "@/hook/recoil/select";

const PostLists = () => {
  const [projects, setProjects] = useRecoilState(atomFilterLists);

  useEffect(() => {
    const allProjects = JSON.parse(localStorage.getItem("allProjects")) || { projectInfo: [] };
    const localStorageProjects = allProjects.projectInfo;

    setProjects((prevProjects) => {
      const existingProjectNames = new Set(prevProjects.map((p) => p.projectName));
      const newProjects = localStorageProjects.filter((p) => !existingProjectNames.has(p.projectName));

      const updatedProjects = [...prevProjects, ...newProjects];

      // 업데이트된 전체 프로젝트 목록을 allProjects.projectInfo에 저장
      const updatedAllProjects = { ...allProjects, projectInfo: updatedProjects };
      localStorage.setItem("allProjects", JSON.stringify(updatedAllProjects));

      return updatedProjects;
    });
  }, [setProjects]);

  const handleLikeChange = (projectName, newLikeState) => {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project) =>
        project.projectName === projectName ? { ...project, like: newLikeState } : project
      );

      const allProjects = JSON.parse(localStorage.getItem("allProjects")) || { projectInfo: [] };
      const updatedAllProjects = { ...allProjects, projectInfo: updatedProjects };
      localStorage.setItem("allProjects", JSON.stringify(updatedAllProjects));

      return updatedProjects;
    });
  };

  console.log("projects", projects);

  return (
    <div className="w-full mt-9 flex items-center justify-start gap-8 flex-wrap">
      {projects.map((project, index) => (
        <div key={index} className="relative">
          <Post project={project} onLikeChange={handleLikeChange} />
        </div>
      ))}
    </div>
  );
};

export default PostLists;
