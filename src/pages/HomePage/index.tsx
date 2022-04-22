import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AsideH2 } from '../../components/styledComponents/h2';
import { fetchActivities, fetchDashboardData } from './action';
import Activities from './Activities';
import DealSummary from './DealSummary';
import Performance from './Performance';
import SelectEmployee from './SelectEmployee/index';
import Summary from './Summary';
import Targets from './Targets';

const HomePage = () => {
  const dispatch = useAppDispatch();

  const id = useAppSelector((state) => state.dashboard.selected);
  const name = useAppSelector((state) => state.auth.user?.name);

  useEffect(() => {
    dispatch(fetchDashboardData(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);
  return (
    <>
      <div>
        <AsideH2 className='d-block'>Hi , {name}</AsideH2>
        <SelectEmployee />
        <div className='row mt-4'>
          <div className='col-md-8'>
            <Summary />
            <Targets />
          </div>
          <div className='col-md-4'>
            <DealSummary />
            <Performance />
          </div>
        </div>
        <Activities />
      </div>
    </>
  );
};

export default HomePage;
