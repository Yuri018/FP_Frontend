import styled from "styled-components";
import { colors } from 'styles/colors';

interface ButtonContainerProps {
  $isGeneralPage?: boolean | undefined;
}

export const BcgContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const BackgroundImageContainer = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid ${colors.baseGrey80};
  display: flex;
  align-items: stretch;
  justify-content: space-between;
`;
export const BackgroundImage = styled.div`

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

export const RightLink = styled.a`
  flex: 1;
  font-size: 13px;
  font-weight: bold;
  color: ${colors.baseGrey80};
  border-bottom: 2px solid ${colors.baseGray30};
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &:hover {
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


export const ButtonContainer = styled.div<ButtonContainerProps>`
  position: absolute;  
  width: fit-content;
  top: ${({ $isGeneralPage }) => $isGeneralPage ? '280px' : '420px'}; 
  left: ${({ $isGeneralPage }) => $isGeneralPage ? '150px' : '580px'}; 
  height: 50px; 
  z-index: 10;
`;

export const MainTitle = styled.h1`
  position: absolute;
  top: 80px;
  left: 150px;
  width: 600px;
  color: ${colors.white};
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 40px;
`;

export const PageTitle = styled.h2`
  position: absolute;
  /* top: 385px; */
  bottom: 100px;
  left: 150px;
  width: 450px;
  color: ${colors.white};
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 40px;
`;

export const UpperGrayBackground = styled.div`
  background-color: ${colors.baseGrey80};
  width: 100%;
`;

export const UpperNewsContainer = styled.div`  
  background-color: ${colors.baseGrey75};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  border-right: 2px solid ${colors.baseGray50};
  width: 25%;
  &:last-child{
    border-right: none;
  }   
`;

export const NewsTitleContainer = styled.h4`
  color: ${colors.white};
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5rem;
  padding-right: 15px;
`;
export const RightWraper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-direction: column;
`;

export const NewsMainContainer = styled.div`
  width: 100%;
  min-height: 150px;
`;