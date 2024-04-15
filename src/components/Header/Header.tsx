import ImageComponent from "components/ImageComponent"
import LogoComponent from "components/LogoComponent"
import WeatherComponent from "components/WeatherComponent"
import DropdownMenu from "components/DropdownMenu"
import { MainContainer, HeaderUpperContainer, HeaderMiddleContainer, HeaderLowerContainer, LogoContainer, LogoTextContainer, TitleContainer, HeaderSerchContainer, ImageComponentWrap, HeaderSearch, HeaderSignInContainer, HeaderSignInText, NavListLeft, NavItem, NavigationLink, NavListRight, TitleLinkContainer, ImageWrap, HeaderDropdownContainer } from "./styles"
import { MainTitle, SearchIcon, SignInIcon } from "assets"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect, MouseEvent } from "react"
import { instance } from "../../utils/axios"
import { Button, Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";


interface HeaderProps {
  logoText?: string;
  logoImgDescr?: { src: string; alt: string };
  city: string;
  HeaderDropDown?: boolean;
  isGeneralPage?: boolean;
  buttonProps?: any;
}

function Header({ logoText, logoImgDescr, city, HeaderDropDown, buttonProps }: HeaderProps) {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = async () => {
    try {
      const response = await instance.get("/auth/logout");
      console.log("Logout successful:", response.data);
      setAuthenticated(false);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleUserAccount = () => {
    navigate("/user_login/user_account");
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

        {authenticated ? (
          <div>
            <Button onClick={handleClick} startIcon={<AccountCircle />}>
              Профиль
            </Button>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleUserAccount}>Личный кабинет</MenuItem>
              <MenuItem onClick={handleLogout}>Выйти из аккаунта</MenuItem>
            </Menu>
          </div>
        ) : (
          <HeaderSignInContainer>
            <HeaderSignInText to="/login" onClick={handleLogin}>
              Sign In
            </HeaderSignInText>
          </HeaderSignInContainer>
        )}
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
  );
}

export default Header;