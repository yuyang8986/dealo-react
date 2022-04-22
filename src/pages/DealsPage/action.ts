import axios, { AxiosError } from 'axios';
import { AppDispatch } from '../../app/store';
import {
  loaderActiveAction,
  loaderDeactivateAction,
} from './../../components/loader/action';
import { getToken } from './../../utils/token';
import { addDeal, setError, setStages } from './stageSlice';

const baseURL = process.env.REACT_APP_API_BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${getToken()}`;

export const fetchStages =
  (selectedEmployee?: string) => async (dispatch: AppDispatch) => {
    dispatch(loaderActiveAction());
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    };
    axios
      .get(`${baseURL}/api/stage/${selectedEmployee ? selectedEmployee : ''}`)
      .then(({ data }) => {
        dispatch(loaderDeactivateAction());
        dispatch(setStages({ stages: data }));
      })
      .catch((e: AxiosError): void => {
        dispatch(loaderDeactivateAction());
        // console.log('error', e);
        const errors = e?.response?.data;
        dispatch(setError({ errors, page: 'all' }));
      });
  };

interface AddStageParams {
  name: string;
}

export const addStage =
  (data: AddStageParams, callBack: Function) =>
  async (dispatch: AppDispatch) => {
    axios
      .post(`${baseURL}/api/stage/`, data)
      .then(async () => {
        axios
          .get(`${baseURL}/api/stage/`)
          .then(({ data }) => {
            dispatch(setStages({ stages: data }));
            callBack(true);
          })
          .catch((e: AxiosError): void => {
            callBack(false);
            console.log('error', e);
            const errors = e?.response?.data;
            dispatch(setError({ errors, page: 'all' }));
          });
      })
      .catch((e: AxiosError): void => {
        callBack(false);
        console.log('error', e);
        const errors = e?.response?.data;
        dispatch(setError({ errors, page: 'stageAdd' }));
      });
  };

interface AddNewDealParams {
  dealName: string;
  dealAmount: string;
  cogsAmount: string;
  grossProfit: string;
  companyId?: string;
  personId?: string;
  stageId?: string;
  type: string | number;
}

export const addNewDeal =
  (data: AddNewDealParams, callBack: Function) =>
  async (dispatch: AppDispatch) => {
    axios
      .post(`${baseURL}/api/pipeline/`, data)
      .then(async (res) => {
        dispatch(addDeal({ deal: res.data }));
        callBack(true);
      })
      .catch((e: AxiosError): void => {
        callBack(false);
        const errors = e?.response?.data;
        dispatch(setError({ errors, page: 'dealAdd' }));
      });
  };
