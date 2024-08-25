"use client";

import { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { RiArrowDownSLine } from "react-icons/ri";

const SortSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (sort) => {
    setSelected(sort);
    setIsOpen(false);
  };

  const sortOptions = ["최신순", "인기순", "모집중", "모집 완료"];

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
          {sortOptions.map((option, index) => (
            <p
              key={index}
              className={twMerge(
                `p-1 w-full h-9 flex justify-start items-center`,
                selected === option ? "text-white bg-accent font-semibold rounded-full" : "text-accent",
                "px-4"
              )}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={selected === option}
            >
              {option}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortSelect;
