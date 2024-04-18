import { Button } from "@mui/material";
import ImageComponent from "components/ImageComponent";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { colors } from 'styles/colors';

interface ButtonContainerProps {
  $isGeneralPage?: boolean | undefined;
}
interface BackgroundImageProps {
  $isGeneralPage?: boolean;
}

export const BcgContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const BackgroundImageContainer = styled.div`
  position: relative;
  border-radius: 20px;
  border: 2px solid ${colors.baseGrey80};
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 20px;
  overflow: hidden;
`;
export const BackgroundImage = styled.div`
  width: 75%;
  min-height: 350px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;
export const BackgroundImage100 = styled.div`
  width: 100%;
  min-height: 350px;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const BcgRightToImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 200px;
  left: 990px;
  width: 263px;
  height: 570px;
  background-color: ${colors.white};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 2px solid ${colors.baseGrey80};
  border-right: 2px solid ${colors.baseGrey80};
  border-bottom: 2px solid ${colors.baseGrey80};
  overflow: hidden;
  z-index: 10;
`;

export const RightToImgHeaderContainer = styled.div`
  border-bottom: 2px solid ${colors.baseGray30};
`;

export const RightTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid ${colors.baseGray30};
`;

export const RightLink = styled.button`
  flex: 1;
  font-size: 13px;
  font-weight: bold;
  color: ${colors.baseGrey80};
  background-color: ${colors.white};
  border: none;
  border-bottom: 2px solid ${colors.baseGray30};
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    background-color: ${colors.baseGray30};
  }
  &:nth-child(2){
    color: ${colors.greenGastro};
  }
  &:nth-child(3){
    color: ${colors.titleCars};
  }
  &:nth-child(4){
    color: ${colors.lilacMovie};
  }
  &:nth-child(5){
    color: ${colors.lightCarrot};
  }
  &:nth-child(5){
    color: ${colors.greenTechno};
  }
`;



export const MainTitle = styled.h2`
  position: relative;
  width: 900px;
  padding: 50px 30px 50px;
  text-align: right;
  color: ${colors.white};
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 40px;
`;

export const PageTitle = styled.h2`
  position: relative;
  color: ${colors.white};
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 40px;
  padding: 30px;
`;
export const ButtonContainer = styled.div<ButtonContainerProps>`
  position: relative;  
  width: fit-content;
  z-index: 10;
  padding: 30px;
`;

export const UpperGrayBackground = styled.div`
  background-color: ${colors.baseGrey80};
  width: 100%;
`;

export const UpperNewsContainer = styled.div`  
  background-color: ${colors.white};
  width: 100%;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const NewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 35px;
  border-right: 2px solid ${colors.baseGray50};
  width: 20%;
  &:last-child{
    border-right: none;
  }   
`;

export const NewsTitleContainer = styled.h4`
  color: ${colors.baseGrey80};
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5rem;
  padding-right: 15px;
`;
export const RightWraper = styled.div`
  flex: 1;
  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: stretch;
  flex-direction: column;    
`;

export const ButtonRead = styled(Button)`
  &&{
    border-radius: 50em;
    padding: 12px 60px;
    font-weight: 800;
  }
`;

export const NewsMainContainer = styled.div`
  width: 100%;
  min-height: 150px;
`;

export const ImageWrap = styled.div`
  max-width: 70px;
  flex: 0 0 auto;
`;

export const DropdownMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
`;

export const DropdownMenuLink = styled(NavLink)`  
  font-size: 13px;
  padding: 15px;
  display: block;
  text-align: center;
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
export const MyImageComponent = styled(ImageComponent)`  
  position: absolute;

`;

export const DropdownMenuItem = styled.li`
  width: 100%;
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

export const TitleContainerWrapper = styled.div`  
  display: flex;
  align-items: flex-end;
  justify-content: center; 
  width: 60%;

`;