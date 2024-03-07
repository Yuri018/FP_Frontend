import ImageComponent from "components/ImageComponent";
import { LogoImgContainer } from "./styles";

function LogoComponent({ src, alt }: ImgComponentProps) {
  return (
    <LogoImgContainer>
      <ImageComponent src={src} alt={alt} />
    </LogoImgContainer>
  )
}

export default LogoComponent;