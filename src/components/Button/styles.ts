import styled from "styled-components";
import {colors} from 'styles/colors';

export const ButtonComponent = styled.button`
  width: 100%;  
  min-height: 50px;
  padding: 15px, 30px;
  padding-left: 20px;
  padding-right: 20px;
  border: none;
  border-radius: 40px;  
  background-color: ${colors.buttonBlue};     
  color: ${colors.white};
  font-family: 'LatoRegular';
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`
