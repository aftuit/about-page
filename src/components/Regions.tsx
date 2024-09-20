import Map from "./ui/Map";
import { IRegion } from "../utils/interface";
import { regions } from "../utils/mock";
import { useState } from "react";
export const Regions = () => {
  const [region, setRegion] = useState<IRegion>(regions[0]);

  const selectRegion = (name: string) => {
    const reg = regions.find((rgn) => rgn.name === name);
    setRegion(reg as IRegion);
  };

  return (
    <div className="w-full bg-white">
      <div className="container-wrapper">
        <h1 className="font-bold text-[35px] text-center uppercase">
          Hududiy bo’linmalar
        </h1>

        <div className="mt-[77px]">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <Map selectRegion={selectRegion} region={region}/>
            </div>
            <div>
              <div className="rounded-[27px] overflow-hidden">
                <div className="w-full h-[23px] bg-primary"></div>
                <div className="px-11 py-12 bg-[#E6EAF3FF]">
                  <img
                    src={region.responsible_for.image}
                    alt=""
                    className="mx-auto w-[141px] h-[141px] rounded-full"
                  />

                  <div className="mt-[50px]">
                    <h3 className="text-[26px] font-bold uppercase text-center text-primary">
                      {region.responsible_for.fullname}
                    </h3>
                    <p className="font-semibold uppercase text-center mt-5">
                      {region.responsible_for.profession}{" "}
                    </p>
                  </div>
                  <div className="mt-[50px] flex-center gap-[53px]">
                    <span className="no-underline text-[22px] font-medium text-primary">
                      Veb-sayt:
                    </span>
                    <div className="h-6 w-0.5 bg-primary"></div>
                    <a
                      href="#"
                      className="no-underline text-[22px] font-medium"
                    >
                      scc.uz
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regions;
