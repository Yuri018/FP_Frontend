import styled from "styled-components";
import { colors } from 'styles/colors';

export const MainLowerPartContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  padding: 0 15px;
  margin: 0 auto;
  overflow: hidden;
`;

export const MainLowerPartFlex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid ${colors.baseGrey80};
`;

export const MainLowerPartItem = styled.div`
  width: calc(33.3333% - 10px);
  border-radius: 10px;
  border: 2px solid ${colors.baseGrey80};
`;

export const MainLowerPartTitle = styled.div`

`;