import { data, data2 } from "../utils/mock";
import PlayIcon from "../assets/icons/play-video.svg?react";
import { GalleryCard } from "./ui/GalleryCard";
export const HeadGallery = () => {
  return (
    <div className="w-full h-full relative z-10">
      <div className="grid grid-cols-6 grid-rows-3 gap-1 w-[692px] h-[344px]">
        {data.map((item: any, index: number) => (
          <GalleryCard key={index} item={item} />
        ))}
      </div>
      <div className="mt-14">
        <div className="flex gap-5 text-white text-sm">
          <button className="px-3 py-3 flex-center gap-3 border border-[#FFFFFF1A] rounded-md">
            <PlayIcon /> <span>Videoni ko’rish</span>
          </button>
          <button className="bg-blue-500 px-4 py-3 flex-center rounded-md">Batafsil</button>
        </div>
      </div>
      <div className="absolute -right-[112px] -bottom-6 z-10">
        <div className="grid grid-cols-6 grid-rows-5 gap-1 w-[692px] h-[576px]">
          {data2.map((item: any, index: number) => (
            <GalleryCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
