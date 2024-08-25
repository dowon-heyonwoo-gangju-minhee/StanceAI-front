"use client";

import { useState } from "react";

const useSelect = (initialValue) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initialValue);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return { isOpen, selected, toggleDropdown, handleSelect };
};

export default useSelect;
