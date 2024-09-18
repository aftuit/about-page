import DangerIcon from "../assets/icons/danger.svg?react";
import Instagram from "../assets/icons/instagram.svg?react";
import Facebook from "../assets/icons/facebook.svg?react";
import Telegram from "../assets/icons/telegram.svg?react";
import Youtube from "../assets/icons/youtube.svg?react";

export const TopBar = () => {
  return (
    <div className="w-full h-[54px] bg-primary flex-between">
      <div className="container-wrapper text-sm font-medium">
        <div className="w-full flex-between text-white">
          <div>
            <span className="text-nowrap ">12:47:41 (GMT+0) 04.09.2024</span>
          </div>
          <div className="w-full mx-3 text-center overflow-hidden">
            <div className="gap-x-2 flex-center text-danger animate">
              <DangerIcon /> Sayt test rejimida ishlamoqda
            </div>
          </div>
          <div className="flex gap-2 items-center text-nowrap">
            <span className="mr-3">Biz ijtimoiy tarmoqlarda:</span>
            <div className="flex-center gap gap-x-2.5">
              <a href="#" className="flex w-5 h-5 rounded-full">
                <Instagram />
              </a>
              <a href="#" className="flex w-5 h-5 rounded-full">
                <Facebook />
              </a>
              <a href="#" className="flex w-5 h-5 rounded-full">
                <Telegram />
              </a>
              <a href="#" className="flex w-5 h-5 rounded-full">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
