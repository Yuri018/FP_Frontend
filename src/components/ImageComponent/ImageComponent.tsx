import { ImgComponentProps } from "./types";

function ImageComponent({ src, alt, className }: ImgComponentProps) {

  return <img src={src} alt={alt} className={className} />
}

export default ImageComponent;
