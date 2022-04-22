import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { TargetBarTitle } from './StyledBar';
import { useAppSelector } from '../../../app/hooks';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);
export const options = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  maintainAspectRatio: false,
};

const BarChart = () => {
  const targetAchieved = useAppSelector(
    (state) => state.dashboard.data?.targetAchieved || {}
  );

  const labels = Object.keys(targetAchieved).map((i) => i.toUpperCase());
  const targetData = Object.entries(targetAchieved).map(([_, value]) => {
    return value?.target;
  });
  const achievedData = Object.entries(targetAchieved).map(([_, value]) => {
    return value?.achieved;
  });

  const data = {
    labels,
    datasets: [
      {
        label: 'Achieved',
        data: achievedData,
        borderColor: '#2196F3',
        backgroundColor: '#2196F3',
        barThickness: 8,
      },
      {
        label: 'Target',
        data: targetData,
        borderColor: '#1976D2',
        backgroundColor: '#1976D2',
        barThickness: 8,
      },
    ],
  };
  return (
    <div className='card'>
      <div className='card-body'>
        <TargetBarTitle>Top States</TargetBarTitle>
        <div>
          <Bar height={300} options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
