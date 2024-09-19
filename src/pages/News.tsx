import { HeadGallery } from "../components/ui/HeadGallery";

export const NewsPage = () => {
  return (
    <div className="w-full bg-white">
      <div className="gallery-content w-full h-[575px] bg-linear">
        <div className="container-wrapper pt-1 h-full">
          <HeadGallery />
        </div>
      </div>
    </div>
  );
};
