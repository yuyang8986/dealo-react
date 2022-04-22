import axios, { AxiosError } from 'axios';
import { AppDispatch } from '../../app/store';
import {
  loaderActiveAction,
  loaderDeactivateAction,
} from './../../components/loader/action';
import { getToken } from './../../utils/token';
import { removePerson, setError, setPersons } from './personSlice';
const baseURL = process.env.REACT_APP_API_BASE_URL;

export const fetchPerson = () => async (dispatch: AppDispatch) => {
  dispatch(loaderActiveAction());
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  };
  axios
    .get(`${baseURL}/api/people`, {
      headers,
    })
    .then(({ data }) => {
      dispatch(loaderDeactivateAction());
      dispatch(setPersons({ persons: data }));
    })
    .catch((e: AxiosError): void => {
      dispatch(loaderDeactivateAction());
      console.log('error', e);
      const errors = e?.response?.data;
      dispatch(setError({ errors, page: 'person' }));
    });
};
export const deletePerson = (id: any) => async (dispatch: AppDispatch) => {
  dispatch(loaderActiveAction());
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  };
  axios
    .delete(`${baseURL}/api/people/${id}`, {
      headers,
    })
    .then(() => {
      dispatch(loaderDeactivateAction());
      dispatch(removePerson({ id }));
    })
    .catch((e: AxiosError): void => {
      dispatch(loaderDeactivateAction());
      console.log('error', e);
      const errors = e?.response?.data;
      dispatch(setError({ errors, page: 'person' }));
    });
};
