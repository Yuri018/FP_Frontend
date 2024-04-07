import { ReactNode } from "react"
import { useState } from 'react';

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
  RightWraper,
  ImageWrap,
} from "./styles"

import type { MainUpperPartProps } from "./types"
import DropdownMenu from "components/DropdownMenu";



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
  isMainPage,
  isGeneralPage,
  buttonProps
}: MainUpperPartProps) {
  const TitleContainer = isMainPage ? MainTitle : PageTitle;
  const [isShowCityMenu, setIsShowCityMenu] = useState(false);
  const handleToggle = () => {
    setIsShowCityMenu(!isShowCityMenu);
  }
  return (
    <BcgContainer>

      <UpperNewsContainer>
        <NewsContainer>
          <NewsTitleContainer>{firstImgTitle}</NewsTitleContainer>
          <ImageWrap>
            <ImageComponent {...firstImgDescr} />
          </ImageWrap>
        </NewsContainer>
        <NewsContainer>
          <NewsTitleContainer>{secondImgTitle}</NewsTitleContainer>
          <ImageWrap>
            <ImageComponent {...secondImgDescr} />
          </ImageWrap>
        </NewsContainer>
        <NewsContainer>
          <NewsTitleContainer>{thirdImgTitle}</NewsTitleContainer>
          <ImageWrap>
            <ImageComponent {...thirdImgDescr} />
          </ImageWrap>
        </NewsContainer>
        <NewsContainer>
          <NewsTitleContainer>{fourthImgTitle}</NewsTitleContainer>
          <ImageWrap>
            <ImageComponent {...fourthImgDescr} />
          </ImageWrap>
        </NewsContainer>
      </UpperNewsContainer>

      <BackgroundImageContainer>
        <BackgroundImage>
          <ImageComponent {...bcgImgDescr} />
          <TitleContainer>{mainTitle}</TitleContainer>
          <ButtonContainer $isGeneralPage={isGeneralPage}>
            <DropdownMenu isGeneralPage={isGeneralPage} buttonProps={buttonProps} />
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

    </BcgContainer >
  )
}

export default MainUpperPart;