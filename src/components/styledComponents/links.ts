import styled from "styled-components";
import {Link} from "react-router-dom"

export const BaseLink = styled(Link)`
    color: black;
    font-size: 0.75rem;
    text-decoration: none;
    &:hover{
        color: black;
    }
`;

export const UnderlineLink = styled(BaseLink)`
    text-decoration: underline;
`;

export const UnderlineLinkRight = styled(UnderlineLink)`
    float: right;
`;

export const ColourLink = styled(BaseLink)`
    text-decoration: none;
    color: ${(props) => props.theme.colors.colourLink.normal};
    &:hover{
        text-decoration: underline;
        color: ${(props) => props.theme.colors.colourLink.hoverColor};
    }
`