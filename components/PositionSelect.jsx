"use client";

import { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { RiArrowDownSLine } from "react-icons/ri";

const positions = ["프론트엔드", "백엔드"];

const PositionSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("포지션");
  const [hovered, setHovered] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (position) => {
    setSelected(position);
    setIsOpen(false);
  };

  return (
    <div className="w-44 h-[46px] ring-2 ring-line rounded-full flex flex-col relative">
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
          {positions.map((select, idx) => (
            <p
              key={idx}
              className={twMerge(
                `rounded-full p-1 w-full h-9 flex justify-start items-center cursor-pointer
                ${
                  selected === select
                    ? "text-white bg-accent font-semibold"
                    : hovered === select
                    ? "text-white bg-accent bg-opacity-70"
                    : "text-accent"
                }`,
                "px-4"
              )}
              onClick={() => handleSelect(select)}
              onMouseEnter={() => setHovered(select)}
              onMouseLeave={() => setHovered(null)}
              role="option"
              aria-selected={selected === select}
            >
              {select}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default PositionSelect;
