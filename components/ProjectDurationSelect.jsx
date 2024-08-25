"use client";

import { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { RiArrowDownSLine } from "react-icons/ri";
import { useRecoilValue } from "recoil";
import { atomIsOpenToolSelected } from "@/hook/recoil/select";

const durations = ["1개월", "3개월", "6개월", "1년", "1년 이상"];

const ProjectDurationSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("프로젝트 기간");
  const dropdownRef = useRef(null);

  const isOpenTool = useRecoilValue(atomIsOpenToolSelected);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (duration) => {
    setSelected(duration);
    setIsOpen(false);
  };

  return (
    <div
      className={`w-44 h-[46px] ring-2 ring-line rounded-full flex flex-col relative ${isOpenTool ? "ml-52" : "ml-0"}`}
    >
      <div
        className={twMerge("w-full h-full flex justify-between items-center p-1", "px-4")}
        onClick={toggleDropdown}
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <p className="text-base font-medium text-black mt-1">{selected}</p>
        <RiArrowDownSLine size={30} className="text-accent mt-1" />
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="ring-2 ring-line rounded-2xl w-full p-2 text-base absolute top-full mt-3 bg-white z-10"
          role="listbox"
        >
          {durations.map((duration, index) => (
            <p
              key={index}
              className={twMerge(
                `p-1 w-full h-9 flex justify-start items-center`,
                selected === duration ? "text-white bg-accent font-semibold rounded-full" : "text-accent",
                "px-4"
              )}
              onClick={() => handleSelect(duration)}
              role="option"
              aria-selected={selected === duration}
            >
              {duration}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDurationSelect;
