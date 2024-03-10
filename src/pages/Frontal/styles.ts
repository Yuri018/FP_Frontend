import { NavLink } from 'react-router-dom';

import styled from "styled-components";

import { colors } from 'styles/colors';

export const FrontalPageWrapper = styled.div`
  position: relative;
  width: 1366px;
  min-height: 965px;
`;

export const DropdownMenuContainer = styled.div`
  position: absolute;
  padding: 0px 20px;
  top: 670px;
  left: 450px;  
  width: 250px;
  height: 270px;
  border-radius: 10px;
  z-index: 20;
  border: 2px solid ${colors.baseGray50};
  background-color: ${colors.white};
  &::after{
    content: '';
    position: absolute;
    top: 50px;
    left: -12px;
    height: 20px;
    width: 20px;
    border-bottom: 2px solid ${colors.baseGray50};
    border-left: 2px solid ${colors.baseGray50};
    background-color:  ${colors.white};
    transform: rotate(45deg);    
  }
`;

export const DropdownMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
`;

export const DropdownMenuLink = styled(NavLink)`  
  font-size: 20px;
  color: ${colors.baseGrey80};
  text-decoration: none;
  cursor: pointer;    
  &:hover {
    color: ${colors.white}; 
  }
  &:focus {
    color: ${colors.white}; 
  }
  &:active {
    color: ${colors.white}; 
  }
`;

export const DropdownMenuItem = styled.li`
  padding: 15px 20px;
  position: relative; 

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%; 
    border-bottom: 1px solid ${colors.baseGray30};
  }
 
  &:last-child:after {
    border-bottom: none;
  }

  /* padding: 15px 20px;
  border-bottom: 1px solid ${colors.baseGray30};
  &:last-child {
    border-bottom: none;
  }  */
  &:hover {
    background-color: ${colors.baseGray30}; 
  }
  &:focus {
    background-color: ${colors.baseGray30}; 
  }
  &:active {
    background-color: ${colors.baseGray30}; 
  }
   &:hover ${DropdownMenuLink}, &:focus ${DropdownMenuLink}, &:active ${DropdownMenuLink} {
    color: ${colors.white}; 
  }
`;

