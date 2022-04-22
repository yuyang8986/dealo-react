import Modal from 'react-modal';
import * as StyledModal from './styledModal';
import IconEnum from '../../models/IconEnum';
import Icon from '../../components/icon';
import { Button } from '../../components/button';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { closeModal, modalState } from './modalSlice';

import { VariantEnum } from '../../components/button/ButtonModel';
import { removeToken } from '../../utils/token';
import { setUser } from '../../pages/LoginPage/loginSlice';

const GenericModal = () => {
  const modal = useAppSelector(modalState);
  const dispatch = useAppDispatch();

  const dismissModal = () => {
    dispatch(closeModal());
  };

  const onAccept = () => {
    removeToken();
    dispatch(setUser({ user: {} }));
    dismissModal();
  };

  return (
    <Modal
      isOpen={modal.isOpen}
      style={StyledModal.modalStyle}
      ariaHideApp={false}
    >
      <div>
        <StyledModal.CloseButtonContainerDiv>
          <StyledModal.CloseButton onClick={dismissModal}>
            <Icon icon={IconEnum.Close} />
          </StyledModal.CloseButton>
        </StyledModal.CloseButtonContainerDiv>
      </div>
      {modal.title && (
        <StyledModal.ModelInfoTitleP>{modal.title}</StyledModal.ModelInfoTitleP>
      )}
      <StyledModal.ConfirmDiv>
        <Button variant={VariantEnum.Primary} onClick={onAccept} width={180}>
          {modal.acceptButtonText}
        </Button>
      </StyledModal.ConfirmDiv>
      <div>
        <Button
          variant={VariantEnum.Secondary}
          onClick={dismissModal}
          width={180}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default GenericModal;
