import { INew } from "../utils/interface";
import Regions from "../components/Regions";
import { links2, news } from "../utils/mock";
import { Elements } from "../components/Elements";
import Government from "../components/Government";
import { NewsCard } from "../components/ui/NewsCard";
import { HeadGallery } from "../components/HeadGallery";
import { Breadcrumb } from "../components/ui/Breadcrumb";
import { UsefullLinks } from "../components/UsefullLinks";
import RightIcon from "../assets/icons/right-chevron.svg?react";

export const NewsPage = () => {
  return (
    <div className="w-full bg-white">
      <div className="gallery-content w-full h-[575px] bg-linear overflow-hidden">
        <div className="container-wrapper pt-1 h-full">
          <HeadGallery />
        </div>
      </div>

      <div className="container-wrapper py-11">
        <p className="text-center font-[15px] font-inter">Eng so'nggi yangiliklardan xabardor bo'ling</p>
        <h1 className="font-bold text-4xl text-center uppercase mt-[19px]">Yangiliklar</h1>

        <div className="flex justify-between items-start mt-14">
          <Breadcrumb items={links2} />
          <button className="flex-center gap-1 text-nowrap">
            Barcha yangiliklar <RightIcon />
          </button>
        </div>

        <div className="pt-[26px] pb-[44px]">
          <div className="grid grid-cols-3 gap-x-[27px]">
            {news.map((item: INew) => (
              <NewsCard key={item.image} item={item} />
            ))}
            <div className="flex flex-col justify-between">
              {[1, 2, 3, 4, 5].map((item: number) => (
                <div key={item} className="cursor-pointer flex-center gap-[14px] h-[70px] px-[19px] bg-light-gray rounded-md group hover:bg-blue-900">
                  <div className="font-bold text-primary ">
                    <h3 className="text-3xl group-hover:text-white">12</h3>
                    <div className="text-lg group-hover:text-white">Sen</div>
                  </div>
                  <div className="h-14 w-px group-hover:bg-white bg-primary "></div>
                  <div className="font-medium group-hover:text-white">Qashqadaryo viloyatida IIVning Xavfsiz shahar markazi tomonidan 2024-yil...</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="py-14 ">
          <Elements />
        </div>
        <div className="py-14 ">
          <UsefullLinks />
        </div>
        <div className="py-[69px] ">
          <Regions />
        </div>

      </div>
        <Government />
    </div>
  );
};
