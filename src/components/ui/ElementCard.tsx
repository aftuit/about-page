import { IElement } from "../../utils/interface";
interface IProps {
    element: IElement;
}

export const ElementCard = ({ element }: IProps) => {
  return (
    <div className="rounded-lg border-[#808080] h-[105px] w-full border overflow-hidden">
      <div className="flex h-full">
        <div className="h-full w-[21px]" style={{ backgroundColor: element.color }}></div>
        <div className="w-full flex justify-start items-center gap-[22px] px-10">
          <element.icon /> <p className="font-medium text-lg leading-[24px]">{element.text}</p>
        </div>
      </div>
    </div>
  );
};
