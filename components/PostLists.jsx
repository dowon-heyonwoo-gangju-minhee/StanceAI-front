"use client";

import { useEffect } from "react";
import Post from "./Post";
import { useRecoilState } from "recoil";
import { atomFilterLists } from "@/hook/recoil/select";

const PostLists = () => {
  const [projects, setProjects] = useRecoilState(atomFilterLists);

  useEffect(() => {
    const fetchProjects = () => {
      const allProjects = JSON.parse(localStorage.getItem("allProjects")) || { projectInfo: [] };
      const localStorageProjects = allProjects.projectInfo;

      if (localStorageProjects.length === 0) {
        // localStorage에 데이터가 없으면 초기 데이터를 설정합니다.
        const initialProjects = {
          projectInfo: [
            // 여기에 첨부 파일의 allProjects 데이터를 넣습니다.
          ],
        };
        localStorage.setItem("allProjects", JSON.stringify(initialProjects));
        return initialProjects.projectInfo;
      }

      return localStorageProjects;
    };

    const localProjects = fetchProjects();

    setProjects((prevProjects) => {
      const existingProjectNames = new Set(prevProjects.map((p) => p.projectName));
      const newProjects = localProjects.filter((p) => !existingProjectNames.has(p.projectName));

      const updatedProjects = [...prevProjects, ...newProjects];

      // 업데이트된 전체 프로젝트 목록을 allProjects.projectInfo에 저장
      const updatedAllProjects = { projectInfo: updatedProjects };
      localStorage.setItem("allProjects", JSON.stringify(updatedAllProjects));

      return updatedProjects;
    });
  }, [setProjects]);

  const handleLikeChange = (projectName, newLikeState) => {
    setProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project) =>
        project.projectName === projectName ? { ...project, like: newLikeState } : project
      );

      const updatedAllProjects = { projectInfo: updatedProjects };
      localStorage.setItem("allProjects", JSON.stringify(updatedAllProjects));

      return updatedProjects;
    });
  };

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
