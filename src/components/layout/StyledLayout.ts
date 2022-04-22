import styled from 'styled-components';
import device from '../../utils/device';

export const WrapperDiv = styled.div`
    background: rgb(252, 252, 252);
    min-width: 320px;
`

export const ContainerDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: white;
    @media (min-width: 1440px) {
        width: 1440px;
        margin: 0 auto;
    }
`

export const MidDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1;
`



export const ContentArea = styled.div<{isLoggedIn: boolean}>`
  width: ${p => p.isLoggedIn ? '80%': '100%'};
  
`;

export const ContentDivContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export const ContentWrapperDivContainer = styled.div`
    display:flex;
    flex: 1;
    flex-direction: column;
    overflow:hidden;
    padding: 2rem 3rem 0 2.1875rem;
    @media ${device.laptopMax}{
        padding: 2rem 1.25rem 0 1.25rem
    }
`