import { CiMail } from "react-icons/ci";

export const Message = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <CiMail size={80} className="" />
      {/* MESSAGE */}
      <div className="flex flex-col items-center justify-center p-5 font-semibold text-2xl text-[#4f4f4f]">
        <h2 className="text-3xl font-bold mb-6">신청 완료!</h2>
        <p className="text-center mb-5 leading-relaxed">
          프로젝트 참여 신청이 완료되었습니다!
          <br />곧 팀 리더가 연락을 드릴 예정입니다. <br />
          기대해 주세요!
        </p>
        <p>알림을 통해 신청 여부를 확인해보세요.</p>
      </div>
    </div>
  );
};
