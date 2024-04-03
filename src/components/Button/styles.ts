import styled from "styled-components";
import { colors } from 'styles/colors';
import { device } from 'styles/breakpoints';


export const ButtonComponent = styled.button`
  width: 100%;  
  min-height: 50px;
  padding: 15px 30px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 40px;  
  background-color: ${colors.buttonBlue};     
  color: ${colors.white};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;

  @media ${device.sm} {
    outline: 1px solid red;
  }
`
