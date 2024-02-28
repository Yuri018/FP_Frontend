import ImageComponent from "components/ImageComponent";
import { HeaderProps } from "./types";

import {
  HeaderMainContainer,
  HeaderUpperContainer,
  HeaderMiddleContainer,
  HeaderLowerContainer,
  LogoContainer,
  LogoImgContainer,
  LogoTextContainer,
  TitleContainer,
  HeaderSerchContainer,
  HeaderSerchText,   
  HeaderSignInContainer, 
  HeaderSignInText,
  BottomLine,
  WeatherAppContainer,
} from "./styles"

import { GermanMainLogo, MainTitle, SearchIcon, SignInIcon } from "assets"

function Header({ children }: HeaderProps) {
  return (
    <HeaderMainContainer>
      <HeaderUpperContainer>
        <HeaderSerchContainer>
          <ImageComponent src={SearchIcon} />
          <HeaderSerchText>Search</HeaderSerchText>
        </HeaderSerchContainer>
        <HeaderSignInContainer>
          <ImageComponent src={SignInIcon} />
          <HeaderSignInText>Sign In</HeaderSignInText>
        </HeaderSignInContainer>
        <BottomLine />
      </HeaderUpperContainer>
      <HeaderMiddleContainer>
        <LogoContainer>
          <LogoImgContainer>
            <ImageComponent src={GermanMainLogo} alt="GermanMainLogo" />
          </LogoImgContainer>
          <LogoTextContainer>Берлин и Бранденбург</LogoTextContainer>
        </LogoContainer>
        <TitleContainer>
          <ImageComponent src={MainTitle} alt="MainTitle" />
        </TitleContainer>
        <WeatherAppContainer>
          Воскресенье, Сентябрь 1, 2024 +22С
        </WeatherAppContainer>
      </HeaderMiddleContainer>
      <HeaderLowerContainer></HeaderLowerContainer>

      {children}
      
    </HeaderMainContainer>
  )
}

export default Header;

