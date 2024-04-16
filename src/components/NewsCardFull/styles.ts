import styled from "styled-components";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

export const MyButton = styled(Button)`
    && {
        border-radius: 50em;
        text-transform: none;
    }
`;

export const MyCardMedia = styled(CardMedia)`
    && {
        min-height: 500px;
        object-fit: contain;
         }
`;
export const MyCard = styled(Card)`
    && {
        border-radius: 20px;
    }
`;