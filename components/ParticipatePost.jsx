"use client";
import { twMerge } from "tailwind-merge";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Like from "./Like";

const ParticipatePost = ({ project, onLikeChange, onRemove }) => {
  const router = useRouter();

  const [style, setStyle] = useState({});
  const cardRef = useRef(null);

  const handleCardClick = (e) => {
    if (!e.target.closest(".like-button") && !e.target.closest(".remove-button")) {
      const titleForUrl = project.title?.replace(/\s+/g, "-").toLowerCase();
      router.replace(`/projects/${titleForUrl}/participate`, undefined, { shallow: true });
    }
  };

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const posX = e.clientX - centerX;
    const posY = e.clientY - centerY;
    const rotateX = ((posY / height) * 20).toFixed(2);
    const rotateY = ((-posX / width) * 20).toFixed(2);

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "all 0.1s ease",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "all 0.5s ease",
    });
  };

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={style}
      onClick={handleCardClick}
      className={twMerge(
        "w-72 h-80 rounded-r-2xl ring-2 ring-line shadow-lg shadow-accent-600",
        "rounded-bl-2xl",
        "transition-all duration-300 ease-in-out hover:ring-accent/70 cursor-pointer",
        "flex flex-col justify-start items-center p-4 gap-5 overflow-y-hidden",
        "hover:shadow-2xl hover:scale-105 shadow-accent/70"
      )}
    >
      {/* TITLE */}
      <h3 className="text-2xl font-semibold mt-7 w-full truncate" title={project.title}>
        {project.title}
      </h3>
      {/* MINI_TITLE */}
      <div className="text-base font-medium w-full">
        <p className="line-clamp-3 overflow-hidden text-ellipsis">{project.description}</p>
      </div>
      {/* TOOLS */}
      <div className="text-base font-medium w-full h-14 overflow-hidden">
        <div className="flex flex-wrap gap-2 overflow-hidden">
          {project.teamInfo.tools.map((tool, index) => (
            <p key={index}>{`# ${tool}`}</p>
          ))}
        </div>
      </div>
      {/* NAME & LIKE & REMOVE */}
      <div className="flex items-center justify-between w-full mt-2">
        <p className="truncate flex-1">{project.leader}</p>
        <div className="flex items-center gap-2">
          <div className="like-button">
            <Like likeCheck={project.like} onLikeChange={(newLikeState) => onLikeChange(project.title, newLikeState)} />
          </div>
          <button
            className="remove-button bg-red-500 text-white px-2 py-1 rounded-full text-xs"
            onClick={() => onRemove(project.title)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParticipatePost;
