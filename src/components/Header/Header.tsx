import ImageComponent from "components/ImageComponent"
import LogoComponent from "components/LogoComponent"
import WeatherComponent from "components/WeatherComponent"
import DropdownMenu from "components/DropdownMenu"
import { MainContainer, HeaderUpperContainer, HeaderMiddleContainer, HeaderLowerContainer, LogoContainer, LogoTextContainer, TitleContainer, HeaderSerchContainer, ImageComponentWrap, HeaderSearch, HeaderSignInContainer, HeaderSignInText, NavListLeft, NavItem, NavigationLink, NavListRight, TitleLinkContainer, ImageWrap, HeaderDropdownContainer } from "./styles"
import { MainTitle, SearchIcon, SignInIcon } from "assets"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { instance } from "../../utils/axios"
import { Cookies } from "react-cookie";
import { Button as MuiButton } from "@mui/material";

interface HeaderProps {
  logoText?: string
  logoImgDescr?: { src: string; alt: string }
  city: string
  HeaderDropDown?: boolean
  isGeneralPage?: boolean
  buttonProps?: any
}

function Header({ logoText, logoImgDescr, city, HeaderDropDown, buttonProps }: HeaderProps) {
  const cookies = new Cookies();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await instance.get("/auth/logout");
      console.log("Logout successful:", response.data);
      // Удаление куки при выходе из аккаунта
      cookies.remove("accessToken");

      // Перенаправление на главную страницу
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

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

        <MuiButton onClick={handleLogout} variant="contained" color="error">
          Выйти из аккаунта
        </MuiButton>
        
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
