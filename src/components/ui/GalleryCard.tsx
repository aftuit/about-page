import { IGallery } from "../../utils/interface";

interface IProps {
  item: IGallery;
}

export const GalleryCard = ({ item }: IProps) => {
  return (
    <>
      {item.color || item.img ? (
        <div className={`rounded-[5px] flex-center card-wrapper flip-left`}>
          <div className="card" style={{ backgroundColor: item.color }}>
            <div className="front">
              {item.content ? <item.content /> : <></>}
              {item.img ? <img src={item.img} /> : <></>}
            </div>
            <div className="back text-white">Test</div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};
