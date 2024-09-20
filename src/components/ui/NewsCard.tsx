import { INew } from "../../utils/interface";

interface IProps {
    item: INew
}

export const NewsCard = ({ item }: IProps) => {
  return (
    <div className="rounded-[10px] overflow-hidden group cursor-pointer">
      <div className="w-full h-7 bg-primary"></div>
      <div className="img-wrapper overflow-hidden">
      <img src={item.image} alt="" className="group-hover:scale-110 translate-all duration-300"/>
      </div>
      <div className="py-[21px] px-[26px] bg-light-gray">
        <p className="text-sm font-semibold">{item.description}</p>
        <div className="flex-between mt-10 text-sm font-medium">
          <span>{item.date}</span>
          <span className="text-primary cursor-pointer">Vazirlik yangiliklari</span>
        </div>
      </div>
    </div>
  );
};
