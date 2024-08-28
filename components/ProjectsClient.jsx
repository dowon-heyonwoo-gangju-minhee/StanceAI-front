"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Projects from "./Projects";

const ProjectsClient = ({ projectData }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [showMessage, setShowMessage] = useState(false);

  const handleClose = () => {
    if (pathname.endsWith("participate")) {
      const crewInfo = JSON.parse(localStorage.getItem("crewInfo") || "{}");
      const userName = crewInfo.userName || "unknown";
      router.replace(`/myStance/${userName}/participate`, undefined, { shallow: true });
    } else {
      router.replace("/", undefined, { shallow: true });
    }
  };

  const handleJoinProject = () => {
    setShowMessage(true);
  };

  if (!projectData) return null;

  return (
    <Projects
      projectData={projectData}
      showMessage={showMessage}
      onClose={handleClose}
      onJoinProject={handleJoinProject}
    />
  );
};

export default ProjectsClient;
