import axios, { AxiosError } from 'axios';
import { AppDispatch } from '../../app/store';
import { loaderActiveAction } from '../../components/loader/action';
import { setError } from '../LoginPage/loginSlice';
import { loaderDeactivateAction } from './../../components/loader/action';

const baseURL = process.env.REACT_APP_API_BASE_URL;

interface FieldData {
  email: string;
  password: string;
  confirmPassword: string;
  verifyCode: string;
}

export const resetPassword =
  (data: FieldData, callBack: Function) => async (dispatch: AppDispatch) => {
    dispatch(loaderActiveAction());
    const headers = {
      'Content-Type': 'application/json',
    };
    axios
      .post(`${baseURL}/api/authentication/ResetPassword`, data, {
        headers,
      })
      .then(() => {
        dispatch(loaderDeactivateAction());
        callBack(true);
        dispatch(setError({ errors: {}, page: '' }));
      })
      .catch((e: AxiosError): void => {
        dispatch(loaderDeactivateAction());
        callBack(false);
        const errors = e?.response?.data;
        dispatch(setError({ errors, page: 'resetPassword' }));
      });
  };
