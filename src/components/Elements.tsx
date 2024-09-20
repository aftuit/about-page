import { ElementCard } from "./ui/ElementCard";
import { elements } from "../utils/mock";
import { IElement } from "../utils/interface";
export const Elements = () => {
  return (
    <div className="w-full bg-white">
      <div className="container-wrapper">
        <h1 className="font-bold text-[35px] text-center uppercase">"Xavfsiz shahar" tizimining elementlari</h1>
        <div className="grid grid-cols-3 gap-[22px]">
          <div className="flex flex-col gap-[22px] mt-14">
            {elements.map((element: IElement, index: number) => index < 5 && <ElementCard key={element.text} element={element} />)}
          </div>
          <div className="flex flex-col gap-[22px] mt-14">
            {elements.map((element: IElement, index: number) => index >= 5 && index < 9 && <ElementCard key={element.text} element={element} />)}
          </div>
          <div className="flex flex-col gap-[22px] mt-14">
            {elements.map((element: IElement, index: number) => index >= 9 && <ElementCard key={element.text} element={element} />)}
          </div>
        </div>
      </div>
    </div>
  );
};
