import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-dvw  flex justify-start items-center gap-16 mt-44 px-44">
      {/* 로고 */}
      <Image
        src={"/logo.png"}
        alt="logo"
        role="로고이미지"
        draggable="false"
        width={240}
        height={62}
        className="w-44 h-12"
      />
      {/* TAB */}
      <div
        className="w-72 h-16 ring-4 ring-line bg-white rounded-full flex justify-center items-center 
      px-2 py-[0.42rem] font-medium drop-shadow-md"
      >
        <div
          className={`flex-1 bg-black text-2xl h-full w-full justify-center items-center 
            flex rounded-full text-white `}
        >
          프로젝트
        </div>
        <div
          className={`flex-1 text-2xl h-full w-full justify-center items-center 
          flex rounded-full`}
        >
          멤버찾기
        </div>
      </div>
    </div>
  );
};

export default Navbar;
