import React from 'react';
import * as Styled from './StyledSidebar';
import MenuItem from './menuItem';
import menuItemData from './menuItemData';
import UserLogo from '../../features/userLogo/UserLogo';

const Sidebar = () => {
  return (
    <Styled.SidebarNav>
      <UserLogo />
      <Styled.MenuUl>
        {menuItemData.map((x, index) => (
          <MenuItem key={x.linkText + index} {...x} />
        ))}
      </Styled.MenuUl>
    </Styled.SidebarNav>
  );
};

export default Sidebar;
