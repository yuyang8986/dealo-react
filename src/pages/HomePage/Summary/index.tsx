import React from 'react';
import { DashboardTitle } from '../StyledHomePage';
import SummaryItem from './SummaryItem';
import {
  FaRegHandshake,
  FaUserClock,
  FaRegBell,
  FaExclamationCircle,
} from 'react-icons/fa';
import { useAppSelector } from '../../../app/hooks';

export interface Item {
  id: any;
  Icon: any;
  text: string;
  count: number;
}

const Summary = () => {
  const countSummary = useAppSelector(
    (state) => state.dashboard.data?.countSummary
  );
  const items: Item[] = [
    {
      id: 1,
      Icon: <FaRegHandshake />,
      text: 'Total Open Deals',
      count: countSummary?.dealCount || 0,
    },
    {
      id: 2,
      Icon: <FaUserClock />,
      text: 'Appointments',
      count: countSummary?.appointmentCount || 0,
    },
    {
      id: 3,
      Icon: <FaRegBell />,
      text: 'Events',
      count: countSummary?.eventCount || 0,
    },
    {
      id: 4,
      Icon: <FaExclamationCircle />,
      text: 'Tasks',
      count: countSummary?.taskCount || 0,
    },
  ];
  return (
    <div>
      <DashboardTitle className='mb-4'>Summary</DashboardTitle>
      <div className='row'>
        {items.map((item: Item) => (
          <div className='col-md-3' key={item.id}>
            <SummaryItem Icon={item.Icon} text={item.text} count={item.count} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Summary;
