import ImageComponent from "components/ImageComponent"

import {
  BcgContainer,
  RightTitle,
  BackgroundImageContainer,
  BackgroundImage,
  MainTitle,
  RightLink,
  ButtonContainer,
  PageTitle,
  RightWraper,
  BackgroundImage100,
  ButtonRead,
  MyImageComponent,
  TitleContainerWrapper,
} from "./styles"

import type { MainUpperPartProps } from "./types"

function MainMiddlePart({
  bcgImgDescr,
  mainTitle,
  isMainPage,
  isGeneralPage,
}: MainUpperPartProps) {
  const TitleContainer = isMainPage ? MainTitle : PageTitle

  return (
    <BcgContainer>
      <BackgroundImageContainer>
        {isGeneralPage && (
          <>
            <BackgroundImage>
              <MyImageComponent {...bcgImgDescr} />
              <TitleContainer>{mainTitle}</TitleContainer>
            </BackgroundImage>
            <RightWraper>
              <RightTitle>НАШИ РАЗДЕЛЫ</RightTitle>
              <RightLink role="button">ВРАЧИ</RightLink>
              <RightLink role="button">ДЕТИ</RightLink>
              <RightLink role="button">МАГАЗИНЫ</RightLink>
              <RightLink role="button">КАФЕ И РЕСТОРАНЫ</RightLink>
              <RightLink role="button">УСЛУГИ</RightLink>
            </RightWraper>
          </>
        )}
        {!isGeneralPage && (
          <BackgroundImage100>
            <MyImageComponent {...bcgImgDescr} />
            <TitleContainerWrapper>
              <TitleContainer>{mainTitle}</TitleContainer>
              <ButtonContainer>
                <ButtonRead variant="contained" disableElevation size="large">
                  Читать
                </ButtonRead>
              </ButtonContainer>
            </TitleContainerWrapper>
          </BackgroundImage100>
        )}
      </BackgroundImageContainer>
    </BcgContainer>
  )
}

export default MainMiddlePart
