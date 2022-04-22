import styled from 'styled-components';
import { DashboardTitle } from '../StyledHomePage';

import { Link } from 'react-router-dom';

export const TargetBarTitle = styled(DashboardTitle)`
  font-size: 20px;
  color: #000000;
  margin: 20px;
`;

export const TargetButton = styled(Link)`
  background: #ba8585;
  color: #fff;
  text-decoration: none;
  padding: 5px 12px;
  border-radius: 4px;
  margin-left: 12px;
  font-size: 14px;
  box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.24);
`;
