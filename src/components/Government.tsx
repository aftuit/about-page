import MatbuotIcon from "../assets/icons/elements/matbuot.svg?react";
import OliyMajlisIcon from "../assets/icons/elements/oliy_majlis.svg?react";
import OliyMajlisSenatIcon from "../assets/icons/elements/oliy_majlis_senati.svg?react";
import HukumatIcon from "../assets/icons/elements/hukumat.svg?react";
import AdliyaIcon from "../assets/icons/elements/adliya.svg?react";

const Government = () => {
  return (
    <div className="w-full pt-[63px] pb-[94px] bg-[#EAEAEAFF]">
      <div className="container-wrapper">
        <div className="grid grid-cols-3 gap-[50px]">
          <a href="#" className="flex-center gap-[25px]">
            <div>
              <MatbuotIcon />
            </div>
            <p className="uppercase text-[15px] font-semibold m-0 text-primary">
              <span className="text-nowrap">O’ZBEKISTON RESPUBLIKASI</span> <br />{" "}
              <span className="text-nowrap">PREZIDENTI MATBUOT XIZMATI</span>
            </p>
          </a>
          <a href="#" className="flex-center gap-[25px]">
            <div>
              <OliyMajlisIcon />
            </div>
            <p className="uppercase text-[15px] font-semibold m-0 text-primary">
              <span className="text-nowrap">O’ZBEKISTON RESPUBLIKASI OLIY</span> <br />{" "}
              <span className="text-nowrap">MAJLISI QONUNCHILIK PALATASI</span>
            </p>
          </a>
          <a href="#" className="flex-center gap-[25px]">
            <div>
              <OliyMajlisSenatIcon />
            </div>
            <p className="uppercase text-[15px] font-semibold m-0 text-primary">
              <span className="text-nowrap">O'ZBEKISTON RESPUBLIKASI</span> <br />{" "}
              <span className="text-nowrap">OLIY MAJLISINING SENATI</span>
            </p>
          </a>
        </div>

        <div className="flex-center gap-[50px] mt-16">
          <a href="#" className="flex-center gap-[25px]">
            <div>
              <HukumatIcon />
            </div>
            <p className="uppercase text-[15px] font-semibold m-0 text-primary">
              <span className="text-nowrap">O’ZBEKISTON RESPUBLIKASI</span> <br /> <span className="text-nowrap">HUKUMATI PORTALI</span>
            </p>
          </a>
          <a href="#" className="flex-center gap-[25px]">
            <div>
              <AdliyaIcon />
            </div>
            <p className="uppercase text-[15px] font-semibold m-0 text-primary">
              <span className="text-nowrap">MILLIY HUQUQIY INTERNET</span> <br /> <span className="text-nowrap">PORTALI</span>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Government;
