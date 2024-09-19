import { useState, useRef } from "react";

import { Link } from "react-router-dom";
import LogoIcon from "../assets/icons/logo.svg?react";
import SearchIcon from "../assets/icons/search.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import EyeIcon from "../assets/icons/eye.svg?react";
import ReceiptIcon from "../assets/icons/receipt.svg?react";
import EarthIcon from "../assets/icons/earth.svg?react";
import DownChevronIcon from "../assets/icons/down-chevron.svg?react";
import Dropdown from "./ui/Dropdown";

export const Header = () => {
  const [showSearchbar, setShowSearchbar] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setShowSearchbar(!showSearchbar);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };
  const toggleDark = () => setIsDark(!isDark);

  return (
    <>
      <div className="w-full bg-light-gray">
        <div className="container-wrapper font-medium text-sm">
          <div className="py-[38px] flex-between">
            <Link to="/">
              <LogoIcon />
            </Link>

            <div className="flex items-center gap-x-[26px]">
              <button
                className="bg-white w-8 h-8 flex-center rounded-full"
                onClick={toggleSearch}
              >
                <SearchIcon />
              </button>
              <button
                className="bg-white w-8 h-8 flex-center rounded-full"
                onClick={toggleDark}
              >
                {isDark ? <MoonIcon /> : <SunIcon />}
              </button>
              <button className="bg-white w-8 h-8 flex-center rounded-full">
                <EyeIcon />
              </button>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="flex-center gap-x-2.5 cursor-pointer">
                <button className="bg-white w-8 h-8 flex-center rounded-full">
                  <ReceiptIcon />
                </button>
                <span>Qabulga yozilish</span>
              </div>
              <Dropdown hover={false}>
                <div className="flex items-center gap-x-2.5">
                  <button className="bg-white w-8 h-8 flex-center rounded-full">
                    <EarthIcon />
                  </button>
                  <button className="flex-center gap-1">
                    O’z <DownChevronIcon />
                  </button>
                </div>
                <div className="py-1 z-20">
                  <a
                    href="#"
                    className="block px-10 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Ру
                  </a>
                  <a
                    href="#"
                    className="block px-10 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    En
                  </a>
                </div>
              </Dropdown>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`search-bar fixed right-0 left-0 bg-[rgba(0,0,0,0.8)] z-30 flex-center transition-all duration-500 ${
          showSearchbar ? "top-0 bottom-0" : "-top-[150%]"
        }`}
        onClick={toggleSearch}
      >
        <div
          className="relative w-1/3 rounded-full overflow-hidden"
          onClick={(evt) => evt.stopPropagation()}
        >
          <input
            ref={inputRef}
            type="text"
            className="block outline-none w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white"
            placeholder="Qidiruv..."
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2"
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </>
  );
};
