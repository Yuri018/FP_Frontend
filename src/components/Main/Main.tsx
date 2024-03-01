import Button from "components/Button"
import ImageComponent from "components/ImageComponent"
import { BerlinMainImg } from "assets"

import {
  BcgContainer,
  UpperGrayBackground,
  BackgroundImageContainer,
  BackgroundImage,
  BcgRightToImgContainer,
  MainTitle,
  ButtonContainer,
} from "./styles"

import { MainProps } from "./types"

function Main({ imageUrl, title }: MainProps) {
  return (
    <BcgContainer>
      <UpperGrayBackground />
      <BackgroundImageContainer>
        <BackgroundImage imageUrl={imageUrl}>
          <ImageComponent src={BerlinMainImg} />
        </BackgroundImage>
        <MainTitle>{(title = 'Здесь вы сможете найти полезную для себя информацию по разделам')}</MainTitle>
        <ButtonContainer>
          <Button name="Выбери свой город" onClick={() => {}} />
        </ButtonContainer>
      </BackgroundImageContainer>
      <BcgRightToImgContainer />
    </BcgContainer>
  )
}

export default Main
