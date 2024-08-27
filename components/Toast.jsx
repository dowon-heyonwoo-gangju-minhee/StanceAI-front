"use client";

import React, { useEffect, useState } from "react";

const Toast = ({ message, contents, type, duration = 1800, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <>
      {/* 배경 오버레이 */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-50 transition-opacity duration-300 ease-in-out ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Toast 메시지 */}
      <div
        className={`w-96 h-20 fixed top-10 right-12 px-4 py-2 rounded-2xl text-white flex justify-center items-start flex-col
          transition-all duration-300 ease-in-out text-xl font-medium z-50
          ${type === "success" ? "bg-blue-500" : "bg-red-500"}
          ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        {message}
        <br />
        <p className="text-lg">{contents}</p>
      </div>
    </>
  );
};

export default Toast;
