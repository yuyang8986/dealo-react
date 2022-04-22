import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContactNavLink = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  &:hover {
    color: inherit;
  }
`;

export const ContactNavItem = styled.li<{ active?: boolean }>`
  text-decoration: none;
  color: ${(p) => (p.active ? '#BA8585' : '#0e0e10')};
  font-size: 16px;
  font-family: 'Lato';
  &:after {
    content: '';
    display: block;
    width: ${(p) => (p.active ? '100%' : '0%')};
    height: 4px;
    background: #ba8585;
    margin-top: 6px;
    transition: width 0.5s;
  }

  &:hover {
    color: #ba8585;
    &:after {
      width: 100%;
    }
  }
`;

export const ContactNavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`;
