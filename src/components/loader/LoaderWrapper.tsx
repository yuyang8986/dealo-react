import React from 'react';
import Modal from 'react-modal';
import { LoaderContentWrapper } from './loaderStyled';

interface PropsState {
  open: boolean;
  children: React.ReactNode;
}

const customStyles = () => {
  return {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      transition: 'all .5s',
      width: '100%',
      backgroundColor: '#24242424',
    },
    overlay: {},
  };
};

const LoaderWrapper = ({ open, children }: PropsState) => {
  return (
    <div>
      <Modal isOpen={open} style={customStyles()}>
        <LoaderContentWrapper>{children}</LoaderContentWrapper>
      </Modal>
    </div>
  );
};

export default LoaderWrapper;
