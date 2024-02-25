import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

const LazyBlurImage = ({ src, hash, ...props }) => {
  console.log(hash);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, []);

  return (
    <>
      <div style={{ display: imageLoaded }}>
        {/* <Blurhash hash={hash} punch={1} resolutionX={52} resolutionY={52} /> */}
      </div>
      <img src={src} alt="" {...props} />
    </>
  );
};

export default LazyBlurImage;
