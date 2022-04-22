import styled from 'styled-components';
import device from '../../utils/device';

export const SidebarNav = styled.nav`
    display: flex;
    flex-direction: column;
    background: #F8F8F8;
    width: 20%;
    @media ${device.laptopMax} {
        width: 3.75rem;
        flex-shrink: 0;
    }
`
export const MenuUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
`