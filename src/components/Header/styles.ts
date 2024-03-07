import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import { colors } from 'styles/colors';

export const HeaderMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* padding-left: 65px; */
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
  /* padding-left: 45px; */
  padding-left: 110px;
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
  font-family: 'LatoRegular'; 
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
  font-family: 'LatoRegular';  
  font-size: 14px;
  font-weight: 500;
  color: ${colors.baseGray50};
`;

export const HeaderMiddleContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding-left: 65px;
  /* outline: 1px solid red; */
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center; 
  justify-content: center;
  gap: 5px;
  width: 365px;
`;

export const LogoTextContainer = styled.p`
  font-family: 'LatoRegular'; 
  font-size: 14px;
  color: black;
`;

export const TitleContainer = styled.div`
  width: 440px;
  height: 50px;
`;

export const TitleLinkContainer = styled(NavLink)`
  width: 100%;
  height: 100%;
`;

export const WeatherAppContainer = styled.div`
  width: 285px;
  height: 25px;
  text-align: right;
  font-family: 'LatoRegular';  
  font-size: 14px;
  color: black;
`;

export const HeaderLowerContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;   
  width: 1366px;
  height: 55px;
  padding-right: 113px;
  padding-left: 113px;
  background-color: ${colors.baseGrey80};
`;

export const NavListLeft = styled.ul`
  display: flex;
  align-items: center;  
  justify-content: flex-start;  
`;

export const NavListRight = styled.ul`
  display: flex;
  align-items: center;     
`;

export const NavItem = styled.li`  
  margin-right: 20px;
    &:last-child {
    margin-right: 0;
  } 
`;

export const NavigationLink = styled.a`  
  font-size: 14px;
  color: ${colors.white};
  text-decoration: none;  
  border-bottom: 2px solid transparent;
  
  &:hover {
    color: ${colors.linkHoverBlue}; 
  }
`;