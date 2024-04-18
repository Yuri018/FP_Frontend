import { ReactNode } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState } from 'react';
import { Menu, MenuItem } from "@mui/material"
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
  ButtonRead,
  MyImageComponent
} from "./styles"

import type { MainUpperPartProps } from "./types"
import DropdownMenu from "components/DropdownMenu";



function MainUpperPart(
  {
    bcgImgDescr,
    mainTitle,
    firstImgDescr,
    secondImgDescr,
    thirdImgDescr,
    fourthImgDescr,
    fifthImgDescr,
    firstImgTitle,
    secondImgTitle,
    thirdImgTitle,
    fourthImgTitle,
    fifthImgTitle,
    isMainPage,
    isGeneralPage,
    buttonProps,
    rightWrapperText,
  }: MainUpperPartProps) {
  const TitleContainer = isMainPage ? MainTitle : PageTitle
  const navigate = useNavigate()
  const [anchorElCity, setAnchorElCity] = useState<null | HTMLElement>(null)

  const handleClickCity = (event: any) => {
    setAnchorElCity(event.currentTarget)
  }

  const handleCloseCity = () => {
    setAnchorElCity(null)
  }

  const handleBerlin = () => {
    navigate("/berlin")
    handleCloseCity()
  }
  const handleMunchen = () => {
    navigate("/munich")
    handleCloseCity()
  }
  const handleFran = () => {
    navigate("/frankfurt")
    handleCloseCity()
  }
  const handleDusel = () => {
    navigate("/dusseldorf")
    handleCloseCity()
  }
  const handleHamburg = () => {
    navigate("/hamburg")
    handleCloseCity()
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
        <NewsContainer>
          <NewsTitleContainer>{fifthImgTitle}</NewsTitleContainer>
          <ImageWrap>
            <ImageComponent {...fifthImgDescr} />
          </ImageWrap>
        </NewsContainer>
      </UpperNewsContainer>
      <BackgroundImageContainer>
        {isGeneralPage && (
          <>
            <BackgroundImage>
              <MyImageComponent {...bcgImgDescr} />
              <TitleContainer>{mainTitle}</TitleContainer>
              {/* <ButtonContainer $isGeneralPage={isGeneralPage}>
                <DropdownMenu
                  isGeneralPage={isGeneralPage}
                  buttonProps={buttonProps}
                />
              </ButtonContainer> */}
            </BackgroundImage>
            <RightWraper>
              <RightTitle>НАШИ РАЗДЕЛЫ</RightTitle>
              <RightLink role="button" onClick={handleClickCity}>
                ВРАЧИ
              </RightLink>
              <div>
                <Menu
                  id="city-menu"
                  anchorEl={anchorElCity}
                  open={Boolean(anchorElCity)}
                  onClose={handleCloseCity}
                >
                  <MenuItem onClick={handleBerlin}>БЕРЛИН</MenuItem>
                  <MenuItem onClick={handleMunchen}>МЮНХЕН</MenuItem>
                  <MenuItem onClick={handleFran}>ФРАНКФУР</MenuItem>
                  <MenuItem onClick={handleDusel}>ДЮССЕЛЬДОРФ</MenuItem>
                  <MenuItem onClick={handleHamburg}>ГАМБУРГ</MenuItem>
                </Menu>
              </div>
              <RightLink role="button" onClick={handleClickCity}>
                ДЕТИ
              </RightLink>
              <div>
                <Menu
                  id="city-menu"
                  anchorEl={anchorElCity}
                  open={Boolean(anchorElCity)}
                  onClose={handleCloseCity}
                >
                  <MenuItem onClick={handleBerlin}>БЕРЛИН</MenuItem>
                  <MenuItem onClick={handleMunchen}>МЮНХЕН</MenuItem>
                  <MenuItem onClick={handleFran}>ФРАНКФУРТ</MenuItem>
                  <MenuItem onClick={handleDusel}>ДЮССЕЛЬДОРФ</MenuItem>
                  <MenuItem onClick={handleHamburg}>ГАМБУРГ</MenuItem>
                </Menu>
              </div>
              <RightLink role="button" onClick={handleClickCity}>
                МАГАЗИНЫ
              </RightLink>
              <div>
                <Menu
                  id="city-menu"
                  anchorEl={anchorElCity}
                  open={Boolean(anchorElCity)}
                  onClose={handleCloseCity}
                >
                  <MenuItem onClick={handleBerlin}>БЕРЛИН</MenuItem>
                  <MenuItem onClick={handleMunchen}>МЮНХЕН</MenuItem>
                  <MenuItem onClick={handleFran}>ФРАНКФУРТ</MenuItem>
                  <MenuItem onClick={handleDusel}>ДЮССЕЛЬДОРФ</MenuItem>
                  <MenuItem onClick={handleHamburg}>ГАМБУРГ</MenuItem>
                </Menu>
              </div>
              <RightLink role="button" onClick={handleClickCity}>
                КАФЕ И РЕСТОРАНЫ
              </RightLink>
              <div>
                <Menu
                  id="city-menu"
                  anchorEl={anchorElCity}
                  open={Boolean(anchorElCity)}
                  onClose={handleCloseCity}
                >
                  <MenuItem onClick={handleBerlin}>БЕРЛИН</MenuItem>
                  <MenuItem onClick={handleMunchen}>МЮНХЕН</MenuItem>
                  <MenuItem onClick={handleFran}>ФРАНКФУРТ</MenuItem>
                  <MenuItem onClick={handleDusel}>ДЮССЕЛЬДОРФ</MenuItem>
                  <MenuItem onClick={handleHamburg}>ГАМБУРГ</MenuItem>
                </Menu>
              </div>
              <RightLink role="button" onClick={handleClickCity}>
                УСЛУГИ
              </RightLink>
              <div>
                <Menu
                  id="city-menu"
                  anchorEl={anchorElCity}
                  open={Boolean(anchorElCity)}
                  onClose={handleCloseCity}
                >
                  <MenuItem onClick={handleBerlin}>БЕРЛИН</MenuItem>
                  <MenuItem onClick={handleMunchen}>МЮНХЕН</MenuItem>
                  <MenuItem onClick={handleFran}>ФРАНКФУРТ</MenuItem>
                  <MenuItem onClick={handleDusel}>ДЮССЕЛЬДОРФ</MenuItem>
                  <MenuItem onClick={handleHamburg}>ГАМБУРГ</MenuItem>
                </Menu>
              </div>
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