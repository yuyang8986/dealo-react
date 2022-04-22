import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { useAppSelector } from '../../../app/hooks';
import { DashboardTitle } from '../StyledHomePage';
import { PerformanceIconWrapper, PerformanceText } from './performanceStyled';

const Performance = () => {
  const performance = useAppSelector(
    (state) => state.dashboard.data?.performance || {}
  );

  return (
    <div className='mt-5'>
      <DashboardTitle>Performance: WL Ratio</DashboardTitle>
      <div className='d-flex justify-content-between mt-3'>
        {Object.entries(performance).map(([name, value]) => (
          <div className='text-center' key={Math.random()}>
            <PerformanceIconWrapper>
              <FaAngleUp />
            </PerformanceIconWrapper>
            <PerformanceText>
              {name} : {value}
            </PerformanceText>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Performance;
