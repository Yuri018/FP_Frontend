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
  RightToImgHeaderContainer,
  RightHeader,
  RightToImgGastroContainer,
  RightGastroHeader,
  RightGastroContentContainer,
  RightToImgAutoContainer,
  RightAutoHeader,
  RightAutoContentContainer,
  RightToImgMovieContainer,
  RightMovieHeader,
  RightMovieContentContainer,
  RightToImgCultureContainer,
  RightCultureHeader,
  RightCultureContentContainer,
  RightToImgTechnoContainer,
  RightTechnoHeader,
  RightTechnoContainer,
  UpperNewsContainer,
  NewsContainerPartitionFirstLine,
  ButtonContainer,
} from "./styles"

import { MainProps } from "./types"

function Main({ imageurl, title }: MainProps) {
  return (
    <BcgContainer>
      <UpperGrayBackground />
      <UpperNewsContainer />
      <NewsContainerPartitionFirstLine />
      <BackgroundImageContainer>
        <BackgroundImage imageurl={imageurl}>
          <ImageComponent src={BerlinMainImg} />
        </BackgroundImage>
        <MainTitle>
          {
            (title =
              "Здесь вы сможете найти полезную для себя информацию по разделам")
          }
        </MainTitle>
        <ButtonContainer>
          <Button name="Выбери свой город" onClick={() => {}} />
        </ButtonContainer>
      </BackgroundImageContainer>
      <BcgRightToImgContainer />
      <RightToImgHeaderContainer />
      <RightHeader>НАШИ РЕКОМЕНДАЦИИ</RightHeader>
      <RightToImgGastroContainer />
      <RightGastroHeader>ГАСТРОНОМИЯ</RightGastroHeader>
      <RightGastroContentContainer>
        {/* !!! TODO !!!  */}
      </RightGastroContentContainer>
      <RightToImgAutoContainer />
      <RightAutoHeader>АВТОПРОМ</RightAutoHeader>
      <RightAutoContentContainer>
        {/* !!! TODO !!!  */}
      </RightAutoContentContainer>
      <RightToImgMovieContainer />
      <RightMovieHeader>КИНО</RightMovieHeader>
      <RightMovieContentContainer>
        {/* !!! TODO !!!  */}
      </RightMovieContentContainer>
      <RightToImgCultureContainer />
      <RightCultureHeader>КУЛЬТУРА</RightCultureHeader>
      <RightCultureContentContainer>
        {/* !!! TODO !!!  */}
      </RightCultureContentContainer>
      <RightToImgTechnoContainer />
      <RightTechnoHeader>ТЕХНИКА</RightTechnoHeader>
      <RightTechnoContainer>{/* !!! TODO !!!  */}</RightTechnoContainer>
    </BcgContainer>
  )
}

export default Main
