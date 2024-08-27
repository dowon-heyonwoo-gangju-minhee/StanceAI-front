"use client";

import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";

const Like = ({ likeCheck, onLikeChange }) => {
  const handleLikeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onLikeChange(!likeCheck);
  };

  return (
    <>
      {likeCheck ? (
        <IoMdHeart
          size={25}
          className="w-6 h-6 flex-shrink-0 text-accent cursor-pointer z-20"
          onClick={handleLikeClick}
        />
      ) : (
        <IoIosHeartEmpty size={25} className="w-6 h-6 flex-shrink-0 cursor-pointer z-20" onClick={handleLikeClick} />
      )}
    </>
  );
};

export default Like;
