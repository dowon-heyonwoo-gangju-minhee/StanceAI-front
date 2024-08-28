"use client";

import React, { useState, useRef, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { toolsContents } from "@/data/toolContents";

const toolTabs = ["전체", "프론트엔드", "백엔드"];

const RegisterTool = ({ onSelect, initialSelectedTools = [] }) => {
  const [activeTab, setActiveTab] = useState("전체");
  const [selectedTools, setSelectedTools] = useState(initialSelectedTools);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (tool) => {
    setSelectedTools((prev) => {
      const newSelectedTools = prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool];
      return newSelectedTools;
    });
  };

  useEffect(() => {
    onSelect(selectedTools);
  }, [selectedTools, onSelect]);

  const filteredTools =
    activeTab === "전체"
      ? toolsContents
      : toolsContents.filter(
          (tool) =>
            (activeTab === "프론트엔드" && tool.part === "front") || (activeTab === "백엔드" && tool.part === "back")
        );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-96 h-9 ring-2 ring-line rounded-full flex flex-col relative">
      <div
        className="w-full h-full flex justify-between items-center px-4"
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
          className="ring-2 ring-line rounded-2xl w-[400px] h-[350px] overflow-y-auto overflow-x-hidden text-base absolute top-full mt-3 py-2 px-4 bg-white z-10"
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
                } rounded-full flex justify-center items-center w-28 h-9 cursor-pointer`}
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

export default RegisterTool;
