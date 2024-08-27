"use client";

import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { RiArrowDownSLine } from "react-icons/ri";
import { toolsContents } from "@/data/toolContents";
import { atomIsOpenToolSelected } from "@/hook/recoil/select";
import { useRecoilState } from "recoil";
import { usePathname } from "next/navigation";

const toolTabs = ["전체", "프론트엔드", "백엔드"];

const UserTools = ({ onSelect, selectedTools }) => {
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const [activeTab, setActiveTab] = useState("전체");
  const [isOpen, setIsOpen] = useRecoilState(atomIsOpenToolSelected);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = useCallback(
    (tool) => {
      const newSelectedTools = selectedTools.includes(tool)
        ? selectedTools.filter((t) => t !== tool)
        : [...selectedTools, tool];
      onSelect(newSelectedTools);
    },
    [selectedTools, onSelect]
  );

  const filteredTools = useMemo(() => {
    if (activeTab === "전체") return toolsContents;
    return toolsContents.filter(
      (tool) =>
        (activeTab === "프론트엔드" && tool.part === "front") || (activeTab === "백엔드" && tool.part === "back")
    );
  }, [activeTab]);

  useEffect(() => {
    return () => setIsOpen(false);
  }, [setIsOpen]);

  return (
    <div
      className={`${
        pathname.startsWith("/myStance") ? "h-9 w-96" : "h-[46px] w-44"
      } w-44 ring-2 ring-line rounded-full flex flex-col relative`}
    >
      <div
        className={twMerge("w-full h-full flex justify-between items-center p-1", "px-4")}
        onClick={toggleDropdown}
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <p className="text-base font-medium text-black">
          {selectedTools.length > 0 ? `${selectedTools.length}개 선택됨` : "기술 스택"}
        </p>
        <RiArrowDownSLine size={30} className="text-accent" />
      </div>
      {isOpen && (
        <div
          ref={dropdownRef}
          className="ring-2 ring-line rounded-2xl w-96 text-base absolute top-full mt-3 py-2 px-4 bg-white z-10"
          role="listbox"
        >
          <div className="flex justify-between items-center gap-2">
            {toolTabs.map((tab) => (
              <p
                key={tab}
                className={`flex-1 ${
                  activeTab === tab ? "bg-accent text-white font-semibold" : "text-black"
                } text-base rounded-full h-9 flex justify-center items-center cursor-pointer`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </p>
            ))}
          </div>
          <div className="w-full h-[1px] bg-line mt-3 mb-4" />
          <div className="flex justify-start items-center gap-2 flex-wrap w-full">
            {filteredTools.map((list) => (
              <p
                key={list.key}
                className={`${
                  selectedTools.includes(list.tool)
                    ? "bg-[#878787] text-white font-semibold text-base"
                    : "text-black hover:bg-opacity-80"
                }  rounded-full 
                  flex justify-center items-center w-28 h-9 cursor-pointer`}
                onClick={() => handleSelect(list.tool)}
                role="option"
                aria-selected={selectedTools.includes(list.tool)}
              >
                {list.tool}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTools;
