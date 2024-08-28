import ParticipatePage from "@/app/myStance/[userId]/participate/page";
import ClientParticipateProjectPage from "@/components/ClientParticipateProjectPage";

const ParticipateProjectPage = ({ params }) => {
  return (
    <>
      <ParticipatePage />
      <ClientParticipateProjectPage projectId={params.id} />
    </>
  );
};

export default ParticipateProjectPage;
