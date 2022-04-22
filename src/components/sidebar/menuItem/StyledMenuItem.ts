import styled from 'styled-components';
import {NavLink} from "react-router-dom";
import device from "../../../utils/device";

export const NavLinkContainer = styled(NavLink)`
    font-size: 1rem;
    display: block;
    padding: 1.25rem 2.815rem;
    line-height: 1rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.greyTextColor};
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    &.active {
        background: white;
        border-left: 3px solid ${(props) => props.theme.colors.highlightColor};
        color: black;
    }
    &:hover {
        color: black;
    }
    @media ${device.laptopMax}{
        padding-left: 0;
        padding-right: 0;
        text-align:center;
    }
    svg{
        width: 20px;
        height:20px;
    }
`

export const NavLi = styled.li`
    display: block;
`

export const NavSpan = styled.span`
    margin-left: 0.8rem;
    @media ${device.laptopMax}{
        display: none;
    }
`