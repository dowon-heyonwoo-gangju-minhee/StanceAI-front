import { HiArrowLongRight } from "react-icons/hi2";

// 참여 버튼 컴포넌트
export const JoinButton = ({ title, style, onClick }) => (
  <button
    className={`${style} rounded-full text-xl 
  font-semibold w-60 h-14 flex justify-center items-center gap-2 hover:bg-accent/80`}
    onClick={onClick}
  >
    <p>{title}</p>
    <HiArrowLongRight size={30} />
  </button>
);
