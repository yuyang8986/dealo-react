import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {acceptEnum} from './modalModel';

export interface ModalState {
  title: string;
  accept?: acceptEnum;
  isOpen: boolean;
  acceptButtonText: string;
}

const initialState: ModalState = {
  title: "",
  accept: undefined,
  isOpen: false,
  acceptButtonText: "",
};

interface modalActionPayload {
  title: string;
  accept?: acceptEnum;
  acceptButtonText: string;
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,

  reducers: {
    openModal: (state, action: PayloadAction<modalActionPayload>) => {
      return {...state, ...action.payload, isOpen: true}
    },
    closeModal: () => {
      return initialState;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;

export const modalState = (state: RootState) => state.modal;

export default modalSlice.reducer;
