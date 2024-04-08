import ImageComponent from "components/ImageComponent";
import { LogoComponentProps } from "./types";
import { WrapImg } from "./styles";

function LogoComponent({ src, alt }: LogoComponentProps) {
  return (
    <>
      <WrapImg>
        <ImageComponent src={src} alt={alt} />
      </WrapImg>
    </>
  )
}

export default LogoComponent;