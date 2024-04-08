import styled from "styled-components";

import { colors } from 'styles/colors'

export const FooterMain = styled.footer`
  width: 100%;  
  background-color: ${colors.baseGrey80};
  color: ${colors.white};
  margin-top: auto;
`;
export const FooterMainContainer = styled.footer`
  width: 100%;
  min-height: 200px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;