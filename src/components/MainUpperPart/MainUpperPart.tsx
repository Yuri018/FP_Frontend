import Button from "components/Button"
import ImageComponent from "components/ImageComponent"
import { BerlinMainImg, Guitars, Butterfly, TwoPeople, University } from "assets"

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
  NewsContainerFirstLeft,
  NewsContainerSrcondLeft,
  NewsContainerThirdRight,
  NewsContainerFourthRight,
  NewsTitleContainer,
  ButtonContainer,
} from "./styles"

import { MainUpperPartProps } from "./types"

function MainUpperPart({ imageurl, title }: MainUpperPartProps) {
  return (
    <BcgContainer>
      <UpperGrayBackground />
      <UpperNewsContainer />
      <NewsContainerFirstLeft>
        <NewsTitleContainer>Музыкальные истории</NewsTitleContainer>
        <ImageComponent src={Guitars} />
      </NewsContainerFirstLeft>
      <NewsContainerSrcondLeft>
        <NewsTitleContainer>Загадки природы</NewsTitleContainer>
        <ImageComponent src={Butterfly} />
      </NewsContainerSrcondLeft>
      <NewsContainerThirdRight>
        <NewsTitleContainer>Жизнь рядом с нами</NewsTitleContainer>
        <ImageComponent src={TwoPeople} />
      </NewsContainerThirdRight>
      <NewsContainerFourthRight>
        <NewsTitleContainer>Высшее образование в Германии</NewsTitleContainer>
        <ImageComponent src={University} />
      </NewsContainerFourthRight>
      <BackgroundImageContainer>
        <BackgroundImage imageurl={imageurl}>
          <ImageComponent src={BerlinMainImg} /> {/* {imageurl} */}
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

export default MainUpperPart;
