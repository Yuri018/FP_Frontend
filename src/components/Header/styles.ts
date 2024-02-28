import styled from "styled-components";
import {LatoReg} from 'styles/fonts';
import { colors } from "./styles";
export { colors } from 'styles/colors';

export const HeaderMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 65px;
  padding-right: 113px;  
  width: 1366px;  
  height: 225px;
  /* outline: 1px solid red; */
`;

export const HeaderUpperContainer = styled.div`
  display: flex;
  flex-grow: 1;   
  justify-content: space-between;
  height: 55px;  
  margin-left: 225px;
  padding-left: 45px;
  position: relative;  
  /* outline: 1px solid red;   */
`;

export const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${colors.baseGray30};
`;

export const HeaderSerchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding-left: 5px;
  border-left: 2px solid ${colors.baseGray30};
`;

export const HeaderSerchText = styled.p`
  font-family: '/src/styles/fonts/Lato-Regular.woff2';  
  font-size: 14px;
  color: ${colors.baseGray30};
`;

export const HeaderSignInContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;  
`;

export const HeaderSignInText = styled.p`
  font-family: '/src/styles/fonts/Lato-Regular.woff2';  
  font-size: 14px;
  font-weight: 500;
  color: ${colors.baseGray50};
`;

export const HeaderMiddleContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  /* outline: 1px solid red; */
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center; 
  gap: 5px;
  width: 365px;
`;
export const LogoImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 220px;
  height: 105px;  
`;
export const LogoTextContainer = styled.p`
  font-family: '/src/styles/fonts/Lato-Regular.woff2';  
  font-size: 14px;
  color: black;
`;

export const TitleContainer = styled.div`
  width: 440px;
  height: 50px;
`;

export const WeatherAppContainer = styled.div`
  width: 285px;
  height: 25px;
  font-family: '/src/styles/fonts/Lato-Regular.woff2';  
  font-size: 14px;
  color: black;
`;

export const HeaderLowerContainer = styled.nav`
  display: flex;
  align-items: center;
  flex-grow: 1;   
  height: 55px;
  background-color: ${colors.baseGrey80};
`;

export const NavListLeft = styled.ul`
  display: flex;
  align-items: center;
  padding-left: 113px;
  justify-content: flex-start;
  gap: 10px;
`;

export const NavListRight = styled.ul`
  display: flex;
  align-items: center;
  padding-right: 113px;
  justify-content: flex-end;
  gap: 10px;
`;

export const NavItem = styled.li`
  margin-right: 10px;
    &:last-child {
    margin-right: 0;
  } 
`;

export const NavLink = styled.a`
  color: ${colors.white};
  text-decoration: none;  
  border-bottom: 2px solid transparent;
  
  &:hover {
    color: ${colors.linkHoverBlue}; 
  }
`;