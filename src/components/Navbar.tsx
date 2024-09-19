import MenuIcon from "../assets/icons/menu.svg?react";
import Dropdown from "./ui/Dropdown";
export const Navbar = () => {
  const menuItems = ["Markaz haqida", "Faoliyat", "Davlat xizmatlari", "Hujjatlar", "Ochiq ma’lumotlar", "Axborot xizmati", "Bog’lanish"];
  return (
    <div className="w-full bg-gray h-[82px] flex-between">
      <div className="container-wrapper">
        <div className="flex-between">
          {menuItems.map((menu: string) => (
            <Dropdown key={menu} hover>
              <div className="flex-center gap-x-1.5 text-[15px] uppercase cursor-pointer">
                <span className="font-semibold">{menu}</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.3642 0.808611C9.42739 0.871855 9.45898 0.944586 9.45898 1.0268C9.45898 1.10902 9.42739 1.18175 9.3642 1.245L4.94748 5.66575C4.8843 5.729 4.81163 5.76062 4.72949 5.76062C4.64735 5.76062 4.57468 5.729 4.5115 5.66575L0.0947794 1.245C0.0315931 1.18175 0 1.10902 0 1.0268C0 0.944586 0.0315931 0.871855 0.0947794 0.808611L0.568676 0.334281C0.631862 0.271037 0.704527 0.239415 0.786669 0.239415C0.868811 0.239415 0.941475 0.271037 1.00466 0.334281L4.72949 4.06252L8.45432 0.334281C8.51751 0.271037 8.59017 0.239415 8.67231 0.239415C8.75445 0.239415 8.82712 0.271037 8.8903 0.334281L9.3642 0.808611Z"
                    fill="#000"
                  />
                </svg>
              </div>
              <div className="py-1 z-20">
                <a href="#" className="text-nowrap block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Markaz yangiliklari
                </a>
                <a href="#" className="text-nowrap block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Press-relizlar
                </a>
                <a href="#" className="text-nowrap block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Matbuot anjumanlari
                </a>
                <a href="#" className="text-nowrap block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  So'rovnomalar
                </a>
                <a href="#" className="text-nowrap block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Axborot xizmati haqida
                </a>
              </div>
            </Dropdown>
          ))}
          <button>
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
