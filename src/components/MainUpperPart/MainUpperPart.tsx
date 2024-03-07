import { ReactNode } from "react"

import Button from "components/Button"
import ImageComponent from "components/ImageComponent"

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
  PageTitle,
} from "./styles"

import { MainUpperPartProps } from "./types"



function MainUpperPart({
  bcgImgDescr,
  mainTitle,
  firstImgDescr,
  secondImgDescr,
  thirdImgDescr,
  fourthImgDescr,
  firstImgTitle,
  secondImgTitle,
  thirdImgTitle,
  fourthImgTitle,
  buttonProps,
  isMainPage,  
  isGeneralPage, 
}: MainUpperPartProps) {
  const TitleContainer = isMainPage ? MainTitle : PageTitle

  return (
    <BcgContainer>
      <UpperGrayBackground />
      <UpperNewsContainer />
      <NewsContainerFirstLeft>
        <NewsTitleContainer>{firstImgTitle}</NewsTitleContainer>
        <ImageComponent {...firstImgDescr} />
      </NewsContainerFirstLeft>
      <NewsContainerSrcondLeft>
        <NewsTitleContainer>{secondImgTitle}</NewsTitleContainer>
        <ImageComponent {...secondImgDescr} />
      </NewsContainerSrcondLeft>
      <NewsContainerThirdRight>
        <NewsTitleContainer>{thirdImgTitle}</NewsTitleContainer>
        <ImageComponent {...thirdImgDescr} />
      </NewsContainerThirdRight>
      <NewsContainerFourthRight>
        <NewsTitleContainer>{fourthImgTitle}</NewsTitleContainer>
        <ImageComponent {...fourthImgDescr} />
      </NewsContainerFourthRight>
      <BackgroundImageContainer>
        <BackgroundImage>
          <ImageComponent {...bcgImgDescr} />
        </BackgroundImage>
        <TitleContainer>{mainTitle}</TitleContainer>
        <ButtonContainer $isGeneralPage = {isGeneralPage}>
          <Button {...buttonProps} />
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