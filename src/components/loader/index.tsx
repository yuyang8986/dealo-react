import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { LoaderOne, LoaderThree, LoaderTwo } from './loaderStyled';
import LoaderWrapper from './LoaderWrapper';
const Loader = () => {
  const loaderStatues = useAppSelector((state) => state.loader.active);
  return (
    <div>
      <LoaderWrapper open={loaderStatues}>
        <div id='ctn'>
          <LoaderOne />
          <LoaderTwo />
          <LoaderThree />
        </div>
      </LoaderWrapper>
    </div>
  );
};

export default Loader;
