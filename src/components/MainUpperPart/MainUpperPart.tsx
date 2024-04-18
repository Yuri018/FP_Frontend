import { useNavigate } from "react-router-dom"
import { useState } from "react"

import ImageComponent from "components/ImageComponent"

import {
  BcgContainer,
  MainTitle,
  UpperNewsContainer,
  NewsContainer,
  NewsTitleContainer,
  PageTitle,
  ImageWrap,
} from "./styles"

import type { MainUpperPartProps } from "./types"

function MainUpperPart({
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
}: MainUpperPartProps) {
  const TitleContainer = isMainPage ? MainTitle : PageTitle
  const navigate = useNavigate()

  const handleBerlin = () => {
    navigate("/berlin")
  }
  const handleMunchen = () => {
    navigate("/munich")
  }
  const handleFran = () => {
    navigate("/frankfurt")
  }
  const handleDusel = () => {
    navigate("/dusseldorf")
  }
  const handleHamburg = () => {
    navigate("/hamburg")
  }

  return (
    <BcgContainer>
      <UpperNewsContainer>
        <NewsContainer onClick={handleBerlin}>
          <NewsTitleContainer>{firstImgTitle}</NewsTitleContainer>
          <ImageWrap>
            <ImageComponent {...firstImgDescr} />
          </ImageWrap>
        </NewsContainer>
        <NewsContainer onClick={handleMunchen}>
          <NewsTitleContainer>{secondImgTitle}</NewsTitleContainer>
          <ImageWrap>
            <ImageComponent {...secondImgDescr} />
          </ImageWrap>
        </NewsContainer>
        <NewsContainer onClick={handleFran}>
          <NewsTitleContainer>{thirdImgTitle}</NewsTitleContainer>
          <ImageWrap>
            <ImageComponent {...thirdImgDescr} />
          </ImageWrap>
        </NewsContainer>
        <NewsContainer onClick={handleDusel}>
          <NewsTitleContainer>{fourthImgTitle}</NewsTitleContainer>
          <ImageWrap>
            <ImageComponent {...fourthImgDescr} />
          </ImageWrap>
        </NewsContainer>
        <NewsContainer onClick={handleHamburg}>
          <NewsTitleContainer>{fifthImgTitle}</NewsTitleContainer>
          <ImageWrap>
            <ImageComponent {...fifthImgDescr} />
          </ImageWrap>
        </NewsContainer>
      </UpperNewsContainer>
    </BcgContainer>
  )
}

export default MainUpperPart
