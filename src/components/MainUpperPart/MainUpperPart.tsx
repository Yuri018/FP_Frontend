import { ReactNode } from "react"

import Button from "components/Button"
import ImageComponent from "components/ImageComponent"

import {
  BcgContainer,
  RightTitle,
  BackgroundImageContainer,
  BackgroundImage,
  MainTitle,
  RightLink,
  UpperNewsContainer,
  NewsContainer,
  NewsTitleContainer,
  ButtonContainer,
  PageTitle,
  RightWraper
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
      {/* <UpperGrayBackground /> */}
      <UpperNewsContainer>
        <NewsContainer>
          <NewsTitleContainer>{firstImgTitle}</NewsTitleContainer>
          <ImageComponent {...firstImgDescr} />
        </NewsContainer>
        <NewsContainer>
          <NewsTitleContainer>{secondImgTitle}</NewsTitleContainer>
          <ImageComponent {...secondImgDescr} />
        </NewsContainer>
        <NewsContainer>
          <NewsTitleContainer>{thirdImgTitle}</NewsTitleContainer>
          <ImageComponent {...thirdImgDescr} />
        </NewsContainer>
        <NewsContainer>
          <NewsTitleContainer>{fourthImgTitle}</NewsTitleContainer>
          <ImageComponent {...fourthImgDescr} />
        </NewsContainer>
      </UpperNewsContainer>

      <BackgroundImageContainer>
        <BackgroundImage>
          <ImageComponent {...bcgImgDescr} />
          <TitleContainer>{mainTitle}</TitleContainer>
          <ButtonContainer $isGeneralPage={isGeneralPage}>
            <Button {...buttonProps} />
          </ButtonContainer>
        </BackgroundImage>
        <RightWraper>
          <RightTitle>НАШИ РЕКОМЕНДАЦИИ</RightTitle>
          <RightLink href="#">ГАСТРОНОМИЯ</RightLink>
          <RightLink href="#">АВТОПРОМ</RightLink>
          <RightLink href="#">КИНО</RightLink>
          <RightLink href="#">КУЛЬТУРА</RightLink>
          <RightLink href="#">ТЕХНИКА</RightLink>
        </RightWraper>
      </BackgroundImageContainer>

    </BcgContainer>
  )
}

export default MainUpperPart;