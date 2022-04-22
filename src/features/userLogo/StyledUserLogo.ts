import styled from 'styled-components';
import device from '../../utils/device';

export const LogoImgContainerDiv = styled.div`
  height: 3.2rem;
  padding: 1.5rem;
  text-align: center;
  @media ${device.laptopMax} {
    display: none;
  }
`;

export const LogoImg = styled.img`
  max-height: 3.5rem;
  text-align: center;
  @media ${device.laptopMax} {
    display: none;
  }
`;
