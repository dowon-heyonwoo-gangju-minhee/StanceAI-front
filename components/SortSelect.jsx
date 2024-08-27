"use client";

import { useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { RiArrowDownSLine } from "react-icons/ri";

const sortOptions = ["최신순", "인기순", "모집중", "모집 완료"];

const SortSelect = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (sort) => {
    setSelected(sort);
    setIsOpen(false);
    onSelect(sort);
  };

  return (
    <div className="w-44 h-[46px] ring-2 ring-line rounded-full flex flex-col relative">
      <div
        className={twMerge("w-full h-full flex justify-between items-center p-1 cursor-pointer", "px-4")}
        onClick={toggleDropdown}
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <p className="text-base font-medium text-black">{selected}</p>
        <RiArrowDownSLine size={30} className="text-accent" />
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
                `p-1 w-full h-9 flex justify-start items-center cursor-pointer`,
                selected === option
                  ? "text-white bg-accent font-semibold rounded-full"
                  : "text-accent hover:bg-accent/50 hover:text-white hover:rounded-full transition-colors duration-200",
                "px-4 rounded-full "
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
