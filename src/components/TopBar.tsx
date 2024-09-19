import { useState, useEffect } from "react";
import DangerIcon from "../assets/icons/danger.svg?react";
import Instagram from "../assets/icons/instagram.svg?react";
import Facebook from "../assets/icons/facebook.svg?react";
import Telegram from "../assets/icons/telegram.svg?react";
import Youtube from "../assets/icons/youtube.svg?react";

export const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date: Date) => {
    const timezoneOffset = 5 * 60 * 60 * 1000;
    const gmtPlus5Time = new Date(date.getTime() + timezoneOffset);

    const hours = gmtPlus5Time.getUTCHours().toString().padStart(2, "0");
    const minutes = gmtPlus5Time.getUTCMinutes().toString().padStart(2, "0");
    const seconds = gmtPlus5Time.getUTCSeconds().toString().padStart(2, "0");
    const day = gmtPlus5Time.getUTCDate().toString().padStart(2, "0");
    const month = (gmtPlus5Time.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = gmtPlus5Time.getUTCFullYear();

    return `${hours}:${minutes}:${seconds} (GMT+5) ${day}.${month}.${year}`;
  };

  return (
    <div className="w-full h-[54px] bg-primary flex-between">
      <div className="container-wrapper text-sm font-medium">
        <div className="w-full flex-between text-white">
          <div>
            <span className="text-nowrap ">
              {formatTime(time)}
            </span>
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
