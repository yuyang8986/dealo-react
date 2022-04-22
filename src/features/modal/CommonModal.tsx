import React from 'react';
import Modal from 'react-modal';
interface PropsState {
  open: boolean;
  close: Function;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large' | 'full';
}

const customStyles = (size: any) => {
  const widthArray: any = {
    small: '25%',
    medium: '45%',
    large: '65%',
    full: '100%',
  };
  return {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      transition: 'all .5s',
      width: widthArray?.[size],
    },
  };
};

const CommonModal = ({ open, close, children, size }: PropsState) => {
  const modalSize: any = size ? size : 'large';
  return (
    <div>
      <Modal
        isOpen={open}
        onRequestClose={() => close()}
        style={customStyles(modalSize)}
        contentLabel='Example Modal'
      >
        <div style={{ overflowX: 'hidden', maxHeight: '90vh' }}>{children}</div>
      </Modal>
    </div>
  );
};

export default CommonModal;
