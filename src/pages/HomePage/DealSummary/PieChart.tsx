import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Dot, LegendText } from './StyledDealSummary';

ChartJS.register(ArcElement, Tooltip, Legend);
const colors = {
  Open: '#E0515A',
  Lost: '#007AFF',
  Won: '#32FB46',
  Left: '#E6E5E6',
};

interface Props {
  won: number;
  lost: number;
  open: number;
}
const PieChart: React.FC<Props> = ({ won, lost, open }) => {
  return (
    <div className='my-4 '>
      <Pie
        data={{
          labels: Object.keys(colors),
          datasets: [
            {
              data: [open, lost, won, won - (lost + open)],
              backgroundColor: Object.values(colors),
              borderColor: Object.values(colors),
              borderWidth: 1,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
      <div className='d-flex justify-content-around mt-5'>
        {Object.entries(colors).map(([name, value]) => {
          if (name === 'Left') return '';
          return (
            <div className='d-flex align-items-center'>
              <Dot bg={value} />
              <LegendText>{name}</LegendText>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PieChart;
