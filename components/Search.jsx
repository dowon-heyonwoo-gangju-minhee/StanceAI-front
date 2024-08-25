"use client";

import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <div className="w-72 h-[46px] rounded-full bg-[#EAEAEA] flex justify-between items-center overflow-hidden">
      <input type="text" className="outline-none file:h-full w-[80%] pl-7 bg-transparent text-xl" placeholder="검색" />
      <AiOutlineSearch size={20} className="text-black w-[20%] h-6 cursor-pointer" />
    </div>
  );
};

export default Search;
