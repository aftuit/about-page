import * as React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../assets/icons/logo.svg?react";
import SearchIcon from "../assets/icons/search.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import EyeIcon from "../assets/icons/eye.svg?react";
import ReceiptIcon from "../assets/icons/receipt.svg?react";
import { Dropdown } from "./ui/Dropdown";

export const Header = () => {
  return (
    <>
      <div className="w-full bg-light-gray">
        <div className="container-wrapper">
          <div className="py-[38px] flex-between">
            <Link to="/">
              <LogoIcon />
            </Link>

            <div className="flex items-center gap-x-[26px]">
              <button className="bg-white w-8 h-8 flex-center rounded-full">
                <SearchIcon />
              </button>
              <button className="bg-white w-8 h-8 flex-center rounded-full">
                <MoonIcon />
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
<Dropdown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
