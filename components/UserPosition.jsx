"use client";

import { useState, useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { RiArrowDownSLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const positions = ["프론트엔드", "백엔드"];

const UserPosition = ({ onSelect, initialPosition }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initialPosition || "포지션");
  const [hovered, setHovered] = useState(null);
  const dropdownRef = useRef(null);

  const pathname = usePathname();

  useEffect(() => {
    if (initialPosition) {
      setSelected(initialPosition);
    }
  }, [initialPosition]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (position) => {
    setSelected(position);
    setIsOpen(false);
    onSelect(position);
  };

  return (
    <div
      className={`${
        pathname.startsWith("/myStance") ? "h-9" : "h-[46px]"
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
        <p className="text-base font-medium text-black">{selected}</p>
        <RiArrowDownSLine size={30} className="text-accent" />
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
                    ? "text-white bg-accent/50 bg-opacity-70"
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

export default UserPosition;
