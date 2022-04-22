import React from 'react';
import MenuItemDataType from '../../../models/MenuItemDataType';
import * as Styled from './StyledMenuItem';

const MenuItem = ({ linkText, linkAddress, Icon }: MenuItemDataType) => {
  const isActive = (match: any, location: any) => {
    const splitLink = linkAddress.split('/').filter(Boolean);
    const splitPathname = location.pathname.split('/').filter(Boolean);

    if (!match) {
      if (splitLink[0] === 'contact' && splitPathname[0] === 'contact') {
        return true;
      }
      return false;
    }

    return true;
  };

  return (
    <Styled.NavLi>
      <Styled.NavLinkContainer
        to={linkAddress}
        exact={true}
        isActive={isActive}
      >
        <Icon />
        <Styled.NavSpan>{linkText}</Styled.NavSpan>
      </Styled.NavLinkContainer>
    </Styled.NavLi>
  );
};

export default MenuItem;
