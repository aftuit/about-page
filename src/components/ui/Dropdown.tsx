import React, { useState, useRef, useEffect } from "react";

type DropdownProps = {
  children: React.ReactNode;
};

const Dropdown = ({ children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={toggleDropdown}>{React.Children.toArray(children)[0]}</div>
      {isOpen && (
        <div className="absolute mt-1 bg-white border rounded shadow-lg">
          {React.Children.toArray(children).slice(1)} {/* The content */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
