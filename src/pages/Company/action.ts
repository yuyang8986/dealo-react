import axios, { AxiosError } from 'axios';
import { AppDispatch } from '../../app/store';
import {
  loaderActiveAction,
  loaderDeactivateAction,
} from './../../components/loader/action';
import { getToken } from './../../utils/token';
import { removeCompany, setCompanies, setError } from './companySlice';
const baseURL = process.env.REACT_APP_API_BASE_URL;

export const fetchCompanies = () => async (dispatch: AppDispatch) => {
  dispatch(loaderActiveAction());
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  };
  axios
    .get(`${baseURL}/api/company`, {
      headers,
    })
    .then(({ data }) => {
      dispatch(loaderDeactivateAction());

      dispatch(setCompanies({ companies: data }));
    })
    .catch((e: AxiosError): void => {
      dispatch(loaderDeactivateAction());
      //   console.log('error', e);
      const errors = e?.response?.data;
      dispatch(setError({ errors, page: 'company' }));
    });
};

export const deleteCompany = (id: any) => async (dispatch: AppDispatch) => {
  dispatch(loaderActiveAction());
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  };
  axios
    .delete(`${baseURL}/api/company/${id}`, {
      headers,
    })
    .then(() => {
      dispatch(loaderDeactivateAction());
      dispatch(removeCompany({ id }));
    })
    .catch((e: AxiosError): void => {
      dispatch(loaderDeactivateAction());
      //   console.log('error', e);
      const errors = e?.response?.data;
      dispatch(setError({ errors, page: 'company' }));
    });
};
