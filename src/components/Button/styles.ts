import styled from "styled-components";
import {colors} from 'styles/colors';
import { LatoReg } from 'styles/fonts';

export const ButtonComponent = styled.button`
  width: 100%;  
  min-height: 50px;
  padding: 15px, 20px;
  border: none;
  border-radius: 40px;  
  background-color: ${colors.buttonBlue};     
  color: ${colors.white};
  font-family: ${LatoReg};
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`
