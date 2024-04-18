import ImageComponent from "components/ImageComponent"
import {  NavigateFunction, useNavigate } from "react-router-dom"

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

import type { MainMiddlePartProps } from "./types"

function MainMiddlePart({
  bcgImgDescr,
  mainTitle,
  isMainPage,
  isGeneralPage,
  readButtonPath,
  handleReadButton,
  onClick
}: MainMiddlePartProps) {
  const TitleContainer = isMainPage ? MainTitle : PageTitle
  const navigate = useNavigate()

  handleReadButton = () => {
    navigate(readButtonPath)
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = event => {
    handleReadButton(readButtonPath)
  }

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
                <ButtonRead
                  variant="contained"
                  disableElevation
                  size="large"
                  onClick={handleClick}
                >
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
