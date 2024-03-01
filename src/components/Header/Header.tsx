import ImageComponent from "components/ImageComponent";

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
  NavListLeft,
  NavItem,
  NavLink,
  NavListRight,
} from "./styles"

import { GermanMainLogo, MainTitle, SearchIcon, SignInIcon } from "assets"

interface HeaderProps {
  logoText?: string 
}

function Header({logoText}: HeaderProps) {
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
          {logoText && <LogoTextContainer>{logoText}</LogoTextContainer>}
        </LogoContainer>
        <TitleContainer>
          <ImageComponent src={MainTitle} alt="MainTitle" />
        </TitleContainer>
        <WeatherAppContainer>
          Воскресенье, Сентябрь 1, 2024 +22С
        </WeatherAppContainer>
      </HeaderMiddleContainer>
      <HeaderLowerContainer>
        <NavListLeft>
          <NavItem>
            <NavLink href="#">Новости</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Культурная жизнь</NavLink>
          </NavItem>
        </NavListLeft>
        <NavListRight>
          <NavItem>
            <NavLink href="#">Общая информация</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Здоровье</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Дети</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Магазины</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Кафе и рестораны</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Услуги</NavLink>
          </NavItem>
        </NavListRight>
      </HeaderLowerContainer>
    </HeaderMainContainer>
  )
}

export default Header;

{/* <Header logoText="Берлин и Бранденбург" /> */}