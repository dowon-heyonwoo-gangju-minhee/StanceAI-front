"use client";

import { socialLogin } from "@/app/actions";
import Modal from "./Modal";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();

  const handleClose = () => {
    router.push(`/`);
  };

  return (
    <Modal onClose={handleClose}>
      <form
        action={socialLogin}
        className="w-[350px] h-[433px] rounded-2xl ring-2 ring-line m-auto mt-6 justify-center items-center gap-10 flex flex-col"
      >
        {/* TITLE */}
        <div className="flex flex-col justify-center items-center gap-2">
          <Image
            src={"/loginLogo.png"}
            alt="logo"
            role="로고이미지"
            draggable="false"
            width={200}
            height={50}
            className="w-36 h-10"
          />
          <p className="text-base font-semibold text-[#4f4f4f]">스텐스에 오신 것을 환영해요!</p>
        </div>
        <div className="font-medium text-[#4f4f4f] text-sm w-72 flex justify-start items-center">
          사이드 프로젝트, 함께 할 팀원을 찾을 수 있는 곳 당신과 비슷한 Stance를 가진 팀원을 만나보세요!
        </div>
        {/* SOCIAL LOGIN */}
        <div className="flex flex-col items-center justify-center gap-4">
          <button
            type="submit"
            name="action"
            value="google"
            className="bg-[#efefef] rounded-full text-black text-sm font-medium 
            ring-1 ring-black w-72 h-11 flex justify-center items-center gap-3 hover:ring-2"
          >
            <Image
              src={"/google.png"}
              alt="google"
              role="소셜이미지"
              draggable="false"
              width={28}
              height={28}
              className="w-7 h-7 ml-2"
            />
            <p className="ml-1">Google 계정으로 로그인</p>
          </button>
          <button
            type="submit"
            name="action"
            value="github"
            className="bg-black rounded-full text-white text-sm font-medium 
            ring-1 ring-black w-72 h-11 flex justify-center items-center gap-2"
          >
            <Image
              src={"/github.png"}
              alt="github"
              role="소셜이미지"
              draggable="false"
              width={43}
              height={43}
              className=""
            />
            <p>Github 계정으로 로그인</p>
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginForm;
