import { useState } from "react";
import { IKImage } from "imagekitio-react";

const Image = ({ src, fallbackSrc, className, w, h, alt }) => {
  const [imgSrc, setImgSrc] = useState(src);

  if (!src || src.trim() === "") {
    return <p>No image</p>;
  }

  const handleError = () => {
    if (fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={imgSrc}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      width={w}
      height={h}
      onError={handleError}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;