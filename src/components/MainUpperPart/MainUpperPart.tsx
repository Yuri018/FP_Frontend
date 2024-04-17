import { ReactNode } from "react"
import { useState } from 'react';

import Button from '@mui/material/Button';
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
  BackgroundImage100,
  ButtonRead

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
  buttonProps,
  rightWrapperText
}: MainUpperPartProps) {
  const TitleContainer = isMainPage ? MainTitle : PageTitle;
  const [isShowCityMenu, setIsShowCityMenu] = useState(false);
  const handleToggle = () => {
    setIsShowCityMenu(!isShowCityMenu);
  }

  //  const handleBerlin = () => {
  //    navigate("/berlin")
  //    handleCloseCity()
  //  }
  //  const handleMunchen = () => {
  //    navigate("/munich")
  //    handleCloseCity()
  //  }
  //  const handleFran = () => {
  //    navigate("/frankfurt")
  //    handleCloseCity()
  //  }
  //  const handleDusel = () => {
  //    navigate("/dusseldorf")
  //    handleCloseCity()
  //  }
  //  const handleHamburg = () => {
  //    navigate("/hamburg")
  //    handleCloseCity()
  //  }

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
        {isGeneralPage && (
          <>
            <BackgroundImage>
              <ImageComponent {...bcgImgDescr} />
              <TitleContainer>{mainTitle}</TitleContainer>
              <ButtonContainer $isGeneralPage={isGeneralPage}>
                <DropdownMenu
                  isGeneralPage={isGeneralPage}
                  buttonProps={buttonProps}
                />
              </ButtonContainer>
            </BackgroundImage>
            <RightWraper>
              <RightTitle>НАШИ РАЗДЕЛЫ</RightTitle>
              <RightLink role="button" onClick={handleToggle}>
                ВРАЧИ
              </RightLink>
              <RightLink role="button" onClick={handleToggle}>
                ДЕТИ
              </RightLink>
              <RightLink role="button" onClick={handleToggle}>
                МАГАЗИНЫ
              </RightLink>
              <RightLink role="button" onClick={handleToggle}>
                КАФЕ И РЕСТОРАНЫ
              </RightLink>
              <RightLink role="button" onClick={handleToggle}>
                УСЛУГИ
              </RightLink>
            </RightWraper>
          </>
        )}
        {!isGeneralPage && (
          <BackgroundImage100>
            <ImageComponent {...bcgImgDescr} />
            <TitleContainer>{mainTitle}</TitleContainer>

            <ButtonContainer>
              <ButtonRead variant="contained" disableElevation size="large">
                Читать
              </ButtonRead>
            </ButtonContainer>
          </BackgroundImage100>
        )}
      </BackgroundImageContainer>
    </BcgContainer>
  )
}

export default MainUpperPart;