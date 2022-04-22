import axios, { AxiosError } from 'axios';
import { AppDispatch } from '../../app/store';
import {
  loaderActiveAction,
  loaderDeactivateAction,
} from './../../components/loader/action';
import { getToken } from './../../utils/token';
import { setActivities, setData, setError } from './dashboardSlice';
const baseURL = process.env.REACT_APP_API_BASE_URL;

export const fetchDashboardData =
  (id?: string) => async (dispatch: AppDispatch) => {
    dispatch(loaderActiveAction());
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    };

    axios
      .get(`${baseURL}/api/dashboard/${id ? id : ''}`, {
        headers,
      })
      .then(({ data }) => {
        dispatch(loaderDeactivateAction());
        dispatch(setData({ data }));
      })
      .catch((e: AxiosError): void => {
        dispatch(loaderDeactivateAction());
        console.log('error', e);
        const errors = e?.response?.data;
        dispatch(setError({ errors, page: 'fetch' }));
      });
  };
export const fetchActivities =
  (id?: string) => async (dispatch: AppDispatch) => {
    dispatch(loaderActiveAction());
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    };

    axios
      .get(`${baseURL}/api/activity`, {
        headers,
      })
      .then(({ data }) => {
        dispatch(loaderDeactivateAction());
        dispatch(setActivities({ activities: data }));
      })
      .catch((e: AxiosError): void => {
        dispatch(loaderDeactivateAction());
        console.log('error', e);
        const errors = e?.response?.data;
        dispatch(setError({ errors, page: 'fetch' }));
      });
  };
