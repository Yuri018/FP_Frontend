import styled from "styled-components";

import { colors } from 'styles/colors';
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import { CardActions, CardContent } from '@mui/material';
import Card from "@mui/material/Card";

export const FrontalPageWrapper = styled.div`
  position: relative;

`;

export const MyButton = styled(Button)`
    && {
        border-radius: 50em;
        text-transform: none;
    }
`;

export const MyCardMedia = styled(CardMedia)`
    && {
        min-height: 140px;
    }
`;
export const MyCard = styled(Card)`
    && {
        border-radius: 20px;
        height: 100%;
        display: flex;
        align-items: stretch;
        justify-content: flex-start;
        flex-direction: column;
    }
`;
export const MyCardActions = styled(CardActions)`
    && {
        margin-top: auto;
    }
`;
export const MyCardContent = styled(CardContent)`
    && {
        cursor: auto;
    }
`;

export const MainLowerPartContainer = styled.section`
  width: 100%;
  max-width: 1400px;
  padding: 0 15px;
  margin: 0 auto 20px;
`;

export const MainLowerPartFlex = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const MainLowerPartItem = styled.div`
  width: 25%;
  padding: 20px 10px;
  min-height: 100%;
`;

export const MainLowerPartTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center
`;