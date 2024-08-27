"use client";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="w-72 h-[46px] rounded-full bg-[#EAEAEA] flex justify-between items-center overflow-hidden">
      <input
        type="text"
        className="outline-none file:h-full w-[80%] pl-7 bg-transparent text-xl"
        placeholder="프로젝트 검색"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <AiOutlineSearch size={20} className="text-black w-[20%] h-6 cursor-pointer" onClick={handleSearch} />
    </div>
  );
};

export default Search;
