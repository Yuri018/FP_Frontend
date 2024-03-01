import styled from "styled-components";
import { colors } from 'styles/colors';
import { Roboto } from 'styles/fonts';

export const BcgContainer = styled.div`
  position: relative;
  width: 1366px;
  height: 775px;
`;

export const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 113px;
  width: 1140px;
  height: 570px;  
  border-radius: 10px;
  overflow: hidden;
  z-index: 5; 
`;

export const BcgRightToImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 200px;
  left: 991px;
  width: 262px;
  height: 570px;
  background-color: ${colors.white};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  z-index: 10;
`;

export const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${colors.baseGray30};
`;

export const ButtonContainer = styled.div`
  position: absolute;  
  width: fit-content;
  top: 280px;
  left: 150px;
  height: 50px; 
  z-index: 10;
`;

export const BackgroundImage = styled.div<{ imageUrl: string }>`
  background-image: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;  
  top: 0;
  left: 0;
  `;

export const MainTitle = styled.h1`
  position: absolute;
  top: 80px;
  left: 150px;
  width: 600px;
  color: ${colors.white};
  font-family: ${Roboto};
  font-weight: bold;
  font-size: 40px;
`;

export const UpperGrayBackground = styled.div`
  background-color: ${colors.baseGrey80};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 475px; 
  z-index: 1; 
`;