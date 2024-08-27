"use client";

import Post from "./Post";
import { useRecoilState } from "recoil";
import { atomFilterLists } from "@/hook/recoil/select";

const PostLists = () => {
  const [projects, setProjects] = useRecoilState(atomFilterLists);

  const handleLikeChange = (projectName, newLikeState) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.projectName === projectName ? { ...project, like: newLikeState } : project
      )
    );
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
