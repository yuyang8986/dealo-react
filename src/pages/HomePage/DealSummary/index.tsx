import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { useAppSelector } from '../../../app/hooks';
import { DashboardTitle } from '../StyledHomePage';
import PieChart from './PieChart';
import { DateWrapper, IconWrapper } from './StyledDealSummary';

const DealSummary = () => {
  const monthOverallSummary = useAppSelector(
    (state) => state.dashboard.data?.monthOverallSummary
  );
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const [selectedMonth, setSelectedMonth] = useState<any>({});

  useEffect(() => {
    if (monthOverallSummary?.length > 0) {
      setSelectedMonth(monthOverallSummary?.[selectedIndex]);
    }
  }, [selectedIndex, monthOverallSummary]);

  useEffect(() => {
    if (monthOverallSummary?.length > 0) {
      const date = new Date();
      const monthName = date.toLocaleString('default', { month: 'long' });
      const year = date.getFullYear();
      const index = monthOverallSummary?.findIndex((item: any) => {
        if (item.name === monthName && item.year === year) {
          return true;
        }
        return false;
      });
      setSelectedIndex(index);
    }
  }, [monthOverallSummary]);

  const prevMonth = () => {
    if (selectedIndex > 0) {
      setSelectedIndex((prev: any) => prev - 1);
    }
  };
  const nextMonth = () => {
    if (selectedIndex < monthOverallSummary.length - 1) {
      setSelectedIndex((prev: any) => prev + 1);
    }
  };

  return (
    <div>
      <DashboardTitle>Deals Summary</DashboardTitle>
      <div className='card'>
        <div className='card-body'>
          <div className='date d-flex justify-content-center gap-3 align-items-center'>
            <IconWrapper className='arrow' onClick={prevMonth}>
              <FaAngleLeft />
            </IconWrapper>
            <DateWrapper>
              {selectedMonth?.name?.substring(0, 3)} {selectedMonth.year}
            </DateWrapper>
            <IconWrapper onClick={nextMonth}>
              <FaAngleRight />
            </IconWrapper>
          </div>
          <div>
            <PieChart
              won={selectedMonth?.wonAmount}
              lost={selectedMonth?.lostAmount}
              open={selectedMonth?.openLeadAmount}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealSummary;
