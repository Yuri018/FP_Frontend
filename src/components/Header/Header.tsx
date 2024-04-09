import ImageComponent from "components/ImageComponent"
import LogoComponent from "components/LogoComponent"
import WeatherComponent from "components/WeatherComponent"

import {
  MainContainer,
  HeaderUpperContainer,
  HeaderMiddleContainer,
  HeaderLowerContainer,
  LogoContainer,
  LogoTextContainer,
  TitleContainer,
  HeaderSerchContainer,
  ImageComponentWrap,
  HeaderSearch,
  HeaderSignInContainer,
  HeaderSignInText,
  NavListLeft,
  NavItem,
  NavigationLink,
  NavListRight,
  TitleLinkContainer,
  ImageWrap,
  HeaderDropdownContainer,
} from "./styles"

import { MainTitle, SearchIcon, SignInIcon } from "assets"
import DropdownMenu from "components/DropdownMenu"
import type { ButtunProps } from "components/Button/types"
import { Route, Routes } from "react-router-dom"
import LoginPage from "components/auth/login/Login"

interface HeaderProps {
  logoText?: string
  logoImgDescr?: { src: string; alt: string }
  city: string
  HeaderDropDown?: boolean
  isGeneralPage?: boolean
  buttonProps?: ButtunProps

}

function Header({ logoText, logoImgDescr, city, HeaderDropDown, buttonProps }: HeaderProps) {
  console.log('Header :>> ', HeaderDropDown);
  return (
    <MainContainer>
      <HeaderUpperContainer>
        <HeaderSerchContainer>
          <ImageComponentWrap>
            <ImageComponent src={SearchIcon} />
          </ImageComponentWrap>
          <HeaderSearch type="search" placeholder="search" name="Search" />
        </HeaderSerchContainer>

        {HeaderDropDown && (
          <HeaderDropdownContainer className="header-dropdown">
            <DropdownMenu HeaderDropDown={HeaderDropDown} buttonProps={buttonProps} />
          </HeaderDropdownContainer>
        )}

        <HeaderSignInContainer>
          <HeaderSignInText to="/login">
            <ImageWrap>
              <ImageComponent src={SignInIcon} />
            </ImageWrap>
            Sign In
          </HeaderSignInText>
        </HeaderSignInContainer>
      </HeaderUpperContainer>
      <HeaderMiddleContainer>
        <LogoContainer>
          <LogoComponent {...logoImgDescr} />
          {logoText && <LogoTextContainer>{logoText}</LogoTextContainer>}
        </LogoContainer>
        <TitleContainer>
          <TitleLinkContainer to="/">
            Германия в лодонях
          </TitleLinkContainer>
        </TitleContainer>
        <WeatherComponent city={city} />
      </HeaderMiddleContainer>
      <HeaderLowerContainer>
        <NavListLeft>
          <NavItem>
            <NavigationLink href="#">Новости</NavigationLink>
          </NavItem>
          <NavItem>
            <NavigationLink href="#">Общая информация</NavigationLink>
          </NavItem>
        </NavListLeft>
        <NavListRight>
          <NavItem>
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
    </MainContainer>
  )
}

export default Header
