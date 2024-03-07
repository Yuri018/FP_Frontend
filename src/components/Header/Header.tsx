import ImageComponent from "components/ImageComponent";
import LogoComponent from "components/LogoComponent";

import {
  HeaderMainContainer,
  HeaderUpperContainer,
  HeaderMiddleContainer,
  HeaderLowerContainer,
  LogoContainer,  
  LogoTextContainer,
  TitleContainer,
  HeaderSerchContainer,
  HeaderSerchText,
  HeaderSignInContainer,
  HeaderSignInText,
  BottomLine,
  WeatherAppContainer,
  NavListLeft,
  NavItem,
  NavigationLink,
  NavListRight,
  TitleLinkContainer,
} from "./styles"

import { MainTitle, SearchIcon, SignInIcon } from "assets"

interface HeaderProps {
  logoText?: string
  logoImgDescr?: { src: string, alt: string }
}

function Header({logoText, logoImgDescr}: HeaderProps) {
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
          <LogoComponent {...logoImgDescr} />          
          {logoText && <LogoTextContainer>{logoText}</LogoTextContainer>}
        </LogoContainer>
        <TitleContainer>
          <TitleLinkContainer to="/">
            <ImageComponent src={MainTitle} alt="MainTitle" />
          </TitleLinkContainer>
        </TitleContainer>
        <WeatherAppContainer>
          Воскресенье, Сентябрь 1, 2024 +22С
        </WeatherAppContainer>
      </HeaderMiddleContainer>
      <HeaderLowerContainer>
        <NavListLeft>
          <NavItem>
            <NavigationLink href="#">Новости</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink href="#">Культурная жизнь</NavigationLink>
          </NavItem>
        </NavListLeft>
        <NavListRight>
          <NavItem>
            <NavigationLink href="#">Общая информация</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink href="#">Здоровье</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink href="#">Дети</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink href="#">Магазины</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink href="#">Кафе и рестораны</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink href="#">Услуги</NavigationLink>
          </NavItem>
        </NavListRight>
      </HeaderLowerContainer>
    </HeaderMainContainer>
  )
}

export default Header;