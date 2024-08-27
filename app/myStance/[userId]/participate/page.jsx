import ParticipateLists from "@/components/ParticipateLists";

export const metadata = {
  title: "participate",
};

const ParticipatePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">참여 프로젝트</h1>
      <ParticipateLists />
    </div>
  );
};

export default ParticipatePage;
