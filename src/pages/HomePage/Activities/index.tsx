import React from 'react';
import { DashboardTitle } from '../StyledHomePage';
import Appointment from './Appointment';
import Events from './Events';
import Tasks from './Tasks';

const Activities = () => {
  return (
    <div className='mt-5'>
      <DashboardTitle>Today's Activities</DashboardTitle>
      <div className='row mt-4'>
        <div className='col-md-6'>
          <Appointment />
          <Events />
        </div>
        <div className='col-md-6'>
          <Tasks />
        </div>
      </div>
    </div>
  );
};

export default Activities;
