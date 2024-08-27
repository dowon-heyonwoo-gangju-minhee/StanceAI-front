"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Projects from "./Projects";

const ProjectsClient = ({ projectData }) => {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);

  const handleClose = () => {
    router.replace(`/`, undefined, { shallow: true });
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
