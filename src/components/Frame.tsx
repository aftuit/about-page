import PhoneIcon from "../assets/icons/phone.svg?react";
import MailIcon from "../assets/icons/mail.svg?react";
import LocationIcon from "../assets/icons/location.svg?react";
import RightIcon from "../assets/icons/right.svg?react";
import InstagramIcon from "../assets/icons/instagram-w.svg?react";
import FacebookIcon from "../assets/icons/facebook-w.svg?react";
import TelegramIcon from "../assets/icons/telegram-w.svg?react";
import YoutubeIcon from "../assets/icons/youtube-w.svg?react";

export const Frame = () => {
  return (
    <div className="w-full bg-dark-primary">
      <div className="container-wrapper pt-20 pb-14 text-inter">
        <div className="flex-between w-full text-white">
          <div className="phone flex-center gap-6">
            <PhoneIcon />
            <span className="text-xl text-inter">(+99871) 207-10-64</span>
          </div>
          <div className="border-2 border-white rounded-[90px] flex-center py-2.5 pl-5 pr-2">
            <MailIcon />
            <span className="text-xl ml-[26px] mr-[47px] text-inter">infosec@exat.uz</span>
            <button>
              <RightIcon />
            </button>
          </div>
          <div className="phone flex-center gap-[27px]">
            <LocationIcon />
            <span className="text-xl text-inter">Tashkent sh. Chilonzor t. Qirq-qiz ko‘chasi, 10A</span>
          </div>
        </div>
        <div className="mt-[86px] flex-center gap-6">
          <button>
            <FacebookIcon />
          </button>
          <button>
            <InstagramIcon />
          </button>
          <button>
            <TelegramIcon />
          </button>
          <button>
            <YoutubeIcon />
          </button>
        </div>
        <div className="mt-[72px] text-white text-center">
          <p>
            2024 
            <span className="text-gray-500 font-bold text-inter">©</span>
            "Xavfsiz shahar" markazining rasmiy sayti.
          </p>
          <p className="mt-[13px] text-inter">Oxirgi yangilanish 2024-09-05 22:03:37</p>
        </div>
      </div>
    </div>
  );
};
