import { AppDispatch } from '../../app/store';
import { activateLoader, deactivateLoader } from './loaderSlice';

export const loaderActiveAction = () => (dispatch: AppDispatch) => {
  dispatch(activateLoader());
};
export const loaderDeactivateAction = () => (dispatch: AppDispatch) => {
  dispatch(deactivateLoader());
};
