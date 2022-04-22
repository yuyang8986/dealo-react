import React from 'react';
import logo from '../../assets/images/logos/dashboard-logo.png';
import * as Styled from './StyledUserLogo';

const UserLogo = () => {
  return (
    <Styled.LogoImgContainerDiv>
      <Styled.LogoImg src={logo} className='App-logo' alt='logo' />
    </Styled.LogoImgContainerDiv>
  );
};

export default UserLogo;
