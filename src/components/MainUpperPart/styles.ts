import styled from "styled-components";
import { colors } from 'styles/colors';
import { Guitars } from 'assets'

export const BcgContainer = styled.div`
  position: relative;
  width: 1366px;
  height: 775px;
  margin-bottom: 30px;
`;

export const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 200px;
  left: 113px;
  width: 1140px;
  height: 570px;  
  border-radius: 10px;
  overflow: hidden;
  border-top: 2px solid ${colors.baseGrey80};
  border-left: 2px solid ${colors.baseGrey80};
  border-bottom: 2px solid ${colors.baseGrey80};
  z-index: 5; 
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
  position: absolute;
  top: 200px;
  right: 115px;
  width: 261px;
  height: 68px;
  border-bottom: 2px solid ${colors.baseGray30};
  z-index: 12;
`;

export const RightHeader = styled.h3`
  position: absolute;
  top: 228px;
  left: 1015px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.baseGrey80};
  z-index: 14;
`;

export const RightToImgGastroContainer = styled.div`
  position: absolute;
  top: 268px;
  right: 115px;
  width: 261px;
  height: 100px;
  border-bottom: 2px solid ${colors.baseGray30};
  z-index: 12;
   &:hover {
    background-color: ${colors.baseGray30};
  }
`;

export const RightGastroHeader = styled.h4`
  position: absolute;
  top: 278px;
  left: 1016px;
  font-size: 13px;
  font-weight: bold;
  color: ${colors.greenGastro};
  z-index: 14;
`;

export const RightGastroContentContainer = styled.div`
  position: absolute;
  top: 292px;
  left: 1016px;
  font-size: 13px;  
  z-index: 14;
`;

export const RightToImgAutoContainer = styled.div`
  position: absolute;
  top: 368px;
  right: 115px;
  width: 261px;
  height: 100px;
  border-bottom: 2px solid ${colors.baseGray30};
  z-index: 12;
   &:hover {
    background-color: ${colors.baseGray30};
  }
`;

export const RightAutoHeader = styled.h4`
  position: absolute;
  top: 378px;
  left: 1016px;
  font-size: 13px;
  font-weight: bold;
  color: ${colors.titleCars};
  z-index: 14;
`;

export const RightAutoContentContainer = styled.div`
  position: absolute;
  top: 392px;
  left: 1016px;
  font-size: 13px;  
  z-index: 14;
`;

export const RightToImgMovieContainer = styled.div`
  position: absolute;
  top: 468px;
  right: 115px;
  width: 261px;
  height: 100px;
  border-bottom: 2px solid ${colors.baseGray30};
  z-index: 12;
   &:hover {
    background-color: ${colors.baseGray30};
  }
`;

export const RightMovieHeader = styled.h4`
  position: absolute;
  top: 478px;
  left: 1016px;
  font-size: 13px;
  font-weight: bold;
  color: ${colors.lilacMovie};
  z-index: 14;
`;

export const RightMovieContentContainer = styled.div`
  position: absolute;
  top: 492px;
  left: 1016px;
  font-size: 13px;  
  z-index: 14;
`;

export const RightToImgCultureContainer = styled.div`
  position: absolute;
  top: 568px;
  right: 115px;
  width: 261px;
  height: 100px;
  border-bottom: 2px solid ${colors.baseGray30};
  z-index: 12;
   &:hover {
    background-color: ${colors.baseGray30};
  }
`;

export const RightCultureHeader = styled.h4`
  position: absolute;
  top: 578px;
  left: 1016px;
  font-size: 13px;
  font-weight: bold;
  color: ${colors.lightCarrot};
  z-index: 14;
`;

export const RightCultureContentContainer = styled.div`
  position: absolute;
  top: 592px;
  left: 1016px;
  font-size: 13px;  
  z-index: 14;
`;

export const RightToImgTechnoContainer = styled.div`
  position: absolute;
  top: 668px;
  right: 115px;
  width: 261px;
  height: 100px;  
  z-index: 12;
   &:hover {
    background-color: ${colors.baseGray30};
  }
`;

export const RightTechnoHeader = styled.h4`
  position: absolute;
  top: 678px;
  left: 1016px;
  font-size: 13px;
  font-weight: bold;
  color: ${colors.greenTechno};
  z-index: 14;
`;

export const RightTechnoContainer = styled.div`
  position: absolute;
  top: 692px;
  left: 1016px;
  font-size: 13px;  
  z-index: 14;
`;

export const ButtonContainer = styled.div`
  position: absolute;  
  width: fit-content;
  top: 280px;
  left: 150px;
  height: 50px; 
  z-index: 10;
`;

export const BackgroundImage = styled.div<{ imageurl: string }>`
  background-image: url(${props => props.imageurl});
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
  font-family: 'LatoRegular';
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

export const UpperNewsContainer = styled.div`  
  background-color: ${colors.baseGrey75};
  position: absolute;
  top: 20px;
  left: 113px;
  width: 1140px;
  height: 130px; 
  border-radius: 10px;
  z-index: 5; 
`;

export const NewsContainerFirstLeft = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;  
  padding-left: 25px;
  padding-right: 25px;
  top: 45px;
  left: 143px;
  width: 270px;
  height: 80px;
  border-right: 2px solid ${colors.baseGray50};   
  z-index: 6;
`;

export const NewsTitleContainer = styled.h4`
  color: ${colors.white};
  font-family: 'LatoRegular';
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5rem;
`;

export const NewsContainerSrcondLeft = styled.div`
  position: absolute;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;  
  padding-left: 25px;
  padding-right: 25px;
  top: 45px;
  left: 413px;
  width: 270px;
  height: 80px;
  border-right: 2px solid ${colors.baseGray50};  
  z-index: 6;
`;

export const NewsContainerThirdRight = styled.div`
  position: absolute;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;  
  padding-left: 25px;
  padding-right: 25px;
  top: 45px;
  left: 683px;
  width: 270px;
  height: 80px;
  border-right: 2px solid ${colors.baseGray50}; 
  z-index: 6;
`;

export const NewsContainerFourthRight = styled.div`
  position: absolute;  
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;  
  padding-left: 25px;
  padding-right: 25px;
  top: 45px;
  left: 953px;
  width: 270px;
  height: 80px;  
  z-index: 6;
`;

export const NewsMainContainer = styled.div`
  width: 1140px;
  height: 1470px;
`;