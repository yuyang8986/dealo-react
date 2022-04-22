import styled from 'styled-components';

export const TableMoreIconWrapper = styled.p`
  color: #c5c7cd;
  cursor: pointer;
`;

export const Time = styled.p`
  color: #c5c7cd;
  font-size: 12px;
  margin-top: 4px;
`;

export const DownIconWrapper = styled.p`
  cursor: pointer;
  font-size: 20px;
`;

export const TableText = styled.p`
  font-family: Mulish;
  font-weight: 600;
  font-size: 14px;
`;

export const ActionMenuWrapper = styled.div`
  position: absolute;
  background: #dbdbdb;
  padding: 15px 10px;
  margin: 0;
  border-radius: 2px;
  top: 20px;
  left: 20px;
  z-index: 1;
`;

export const ActionMenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ActionMenuItem = styled.li`
  color: black;
  padding: 8px 10px;
  text-decoration: none;
  display: block;
  &:hover {
    cursor: cursor;
  }
`;
