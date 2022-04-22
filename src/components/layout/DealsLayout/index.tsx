import React from 'react';
import { useLocation } from 'react-router-dom';
import DealsHeader from './DealsHeader';
import { NavItem, NavLink, NavList } from './StyledDeals';

interface MenuItem {
  link: string;
  name: string;
}

const menuList: MenuItem[] = [
  {
    link: '/deals',
    name: 'Deals',
  },
  {
    link: '/deals/em',
    name: 'Employee',
  },
];
const DealsLayout: React.FC<{
  children: React.ReactNode;
  filter?: React.ReactNode;
}> = ({ children, filter }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <DealsHeader />
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <NavList>
            {menuList.map((item: MenuItem) => (
              <NavItem active={pathname === item.link} key={Math.random()}>
                <NavLink to={item.link}>{item.name}</NavLink>
              </NavItem>
            ))}
          </NavList>
          {filter || ''}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DealsLayout;
