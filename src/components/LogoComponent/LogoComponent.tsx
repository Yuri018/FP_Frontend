import ImageComponent from "components/ImageComponent";
import { LogoComponentProps } from "./types";

function LogoComponent({ src, alt }: LogoComponentProps) {
  return (
    <>
      <ImageComponent src={src} alt={alt} />
    </>
  )
}

export default LogoComponent;