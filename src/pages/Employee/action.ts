import axios, { AxiosError } from 'axios';
import { AppDispatch } from '../../app/store';
import {
  loaderActiveAction,
  loaderDeactivateAction,
} from './../../components/loader/action';
import { getToken } from './../../utils/token';
import {
  addEmployee,
  removeEmployee,
  setEmployees,
  setError,
} from './employeeSlice';
const baseURL = process.env.REACT_APP_API_BASE_URL;

export interface AddEmployeeData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export const fetchEmployees = () => async (dispatch: AppDispatch) => {
  dispatch(loaderActiveAction());
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  };
  axios
    .get(`${baseURL}/api/employee`, {
      headers,
    })
    .then(({ data }) => {
      dispatch(loaderDeactivateAction());
      dispatch(setEmployees({ employees: data }));
    })
    .catch((e: AxiosError): void => {
      dispatch(loaderDeactivateAction());
      console.log('error', e);
      const errors = e?.response?.data;
      dispatch(setError({ errors, page: 'employee' }));
    });
};
export const addEmployeeAction =
  (values: AddEmployeeData) => async (dispatch: AppDispatch) => {
    console.log('add employees');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    };

    const data: any = { ...values };
    data.isManager = true;

    axios
      .post(`${baseURL}/api/employee`, data, {
        headers,
      })
      .then(({ data }) => {
        dispatch(addEmployee({ item: data }));
      })
      .catch((e: AxiosError): void => {
        console.log('error', e);
        const errors = e?.response?.data;
        dispatch(setError({ errors, page: 'add' }));
      });
  };
export const deleteEmployeeAction =
  (id: any) => async (dispatch: AppDispatch) => {
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
        dispatch(removeEmployee({ id }));
      })
      .catch((e: AxiosError): void => {
        dispatch(loaderDeactivateAction());
        //   console.log('error', e);
        const errors = e?.response?.data;
        dispatch(setError({ errors, page: 'company' }));
      });
  };
