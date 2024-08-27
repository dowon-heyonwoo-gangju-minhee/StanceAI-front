"use client";
import { IoClose } from "react-icons/io5";

const Modal = ({ onClose, children }) => {
  return (
    <div className="bg-accent/70 z-50 w-dvw h-dvh fixed top-0 left-0 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-[958px] h-[598px] rounded-2xl">
        {/* CONTENTS */}
        <div className="flex justify-between items-center p-4">
          <p></p>
          {/* X 버튼 */}
          <button
            onClick={onClose}
            className="bg-[#f3f3f3] rounded-full w-14 h-14 flex justify-center items-center hover:bg-accent"
          >
            <IoClose size={24} className="text-[#B6B6B6] w-10 h-10 " />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
