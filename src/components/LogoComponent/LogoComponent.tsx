import ImageComponent from "components/ImageComponent";
import { LogoImgContainer } from "./styles";
import { LogoComponentProps } from "./types";

function LogoComponent({ src, alt }: LogoComponentProps) {
  return (
    <LogoImgContainer>
      <ImageComponent src={src} alt={alt} />
    </LogoImgContainer>
  )
}

export default LogoComponent;