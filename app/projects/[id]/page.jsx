import ClientProjectsPage from "@/components/ClientProjectsPage";

const ProjectsPage = ({ params }) => {
  return <ClientProjectsPage projectId={params.id} />;
};

export default ProjectsPage;
