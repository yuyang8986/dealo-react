import React from 'react';
import { DashboardTitle } from '../StyledHomePage';
import BarChart from './BarChart';
import { TargetButton } from './StyledBar';

const Targets = () => {
  return (
    <div className='mt-5'>
      <div className='d-flex gap-2 align-items-center'>
        <DashboardTitle className='mt-2'>Targets</DashboardTitle>
        <TargetButton to='/'>Set Targets</TargetButton>
      </div>
      <div className='mt-2'>
        <BarChart />
      </div>
    </div>
  );
};

export default Targets;
