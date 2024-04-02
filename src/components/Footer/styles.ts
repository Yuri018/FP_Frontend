import styled from "styled-components";

import { colors } from 'styles/colors'

export const FooterMainContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  padding-right: 113px;  
  width: 1366px;  
  height: 225px;
  background-color: ${colors.baseGrey80};
  color: ${colors.white};
  /* outline: 1px solid red; */
`;