import { useRouter } from "next/navigation";

const CreateProject = () => {
  const router = useRouter();

  const handleClick = () => {
    router.replace("/register-project", undefined, { shallow: true });
  };

  return (
    <div
      className="bg-black w-44 h-[46px] rounded-full flex justify-center items-center cursor-pointer hover:bg-accent active:bg-black"
      onClick={handleClick}
    >
      <p className="text-white text-lg font-semibold">+ 프로젝트 생성</p>
    </div>
  );
};

export default CreateProject;
