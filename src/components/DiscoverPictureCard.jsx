import axios from "axios";
import fileDownload from "js-file-download";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";
import { LuDownload } from "react-icons/lu";

const DiscoverPictureCard = ({
  height,
  src,
  index,
  width,
  id,
  onClick,
  obj,
  alt,
  ...other
}) => {
  const handleOnClick = () => {
    onClick(index);
  };
  const downloadImage = async (url, fileName) => {
    const response = await axios.get(url, {
      responseType: "blob",
    });
    const contentType = response.headers["content-type"];
    const blob = new Blob([response.data], { type: contentType });
    fileDownload(blob, fileName);
  };
  return (
    <div className="relative w-fit h-fit group">
      <LazyLoadImage
        wrapperProps={{ style: { display: "contents" } }} // Remove container
        alt={alt}
        effect="blur"
        className=" cursor-pointer"
        onClick={handleOnClick}
        height={height}
        src={src?.large2x}
        delayTime={5000}
        delayMethod="debounce"
        width={width}
      />
      <div
        className="absolute flex items-end justify-between p-4 text-white  opacity-0 duration-500 group-hover:opacity-100 bottom-0 h-20 bg-gradient-to-b to-100% from-transparent to-gray-50 w-full "
        style={{
          backgroundImage: `linear-gradient(to right, #333 ,${other.avg_color})`,
        }}
      >
        <div className="flex  gap-2 items-center justify-center">
          <img
            src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
            className="w-10 sm:w-14 rounded-full "
            alt="Avatar"
          />
          <span className="text-white">{other.photographer}</span>
        </div>

        <button
          onClick={() => {
            downloadImage(src.original, `mohamedMaher_logo_${Date.now()}.png`);
          }}
          download={true}
          className=" items-center gap-1  justify-center bg-black hover:scale-105 duration-500  shadow-md hidden group-hover:flex px-2 sm:px-6 p-2 sm:py-3 rounded-md"
        >
          <LuDownload className=" text-lg font-extrabold" />
          <span className="max-sm:hidden">Download</span>
        </button>
      </div>
    </div>
  );
};

export default DiscoverPictureCard;
