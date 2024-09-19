import React, { useState, useRef, useEffect } from "react";

type DropdownProps = {
  children: React.ReactNode;
  hover: boolean;
};

const Dropdown = ({ children, hover }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleOnHover = () => {
    if (!hover) return;
    setIsOpen((val) => !val);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={toggleOnHover}
      onMouseLeave={toggleOnHover}
    >
      <div onClick={toggleDropdown}>{React.Children.toArray(children)[0]}</div>
      {isOpen && (
        <div
          className={`absolute bg-white border rounded shadow-lg`}
          // onMouseEnter={() => setIsOpen(true)}
        >
          {React.Children.toArray(children).slice(1)} {/* The content */}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
