import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const InsitingText = styled(NavLink)`
    color: blue;
    font-weight: 600;
    display: inline-block;
    margin-left: 15px;
    &:hover {
        cursor: pointer;

    }
`