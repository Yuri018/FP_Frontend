import styled from "styled-components";
import { Grid, Card } from '@mui/material';

export const MainLowerPartContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;

`;
export const MainLowerPartFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: flex-start;
`;

export const MainLowerPartItem = styled.div({
  width: 'calc(25% - 20px)', // Adjusting for margin
  margin: '10px',
});

export const InfoCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});