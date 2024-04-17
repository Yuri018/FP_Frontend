import styled from "styled-components";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

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
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
    }
`;
export const MyCardActions = styled(CardActions)`
    && {
        margin-top: auto;
    }
`;