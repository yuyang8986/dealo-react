import axios, { AxiosError } from 'axios';
import { AppDispatch } from '../../app/store';
import {
  loaderActiveAction,
  loaderDeactivateAction,
} from './../../components/loader/action';
import { decode, removeToken, storeToken } from './../../utils/token';
import { setError, setUser } from './loginSlice';
const baseURL = process.env.REACT_APP_API_BASE_URL_TOKEN;

interface LoginData {
  username: string;
  password: string;
}

export const login =
  ({ username, password }: LoginData) =>
  async (dispatch: AppDispatch) => {
    dispatch(loaderActiveAction());
    const userData = {
      client_id: 'mycrm.console.password',
      client_secret: 'secret',
      grant_type: 'password',
      username,
      password,
    };
    const formData = new FormData();
    Object.entries(userData).forEach(([name, value]) => {
      formData.append(name, value);
    });

    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    axios
      .post(`${baseURL}/connect/token`, formData, {
        headers,
      })
      .then(({ data }) => {
        const token = data.access_token;
        const expire = data.expires_in;
        const tokenType = data.token_type;

        const decodedData = decode(`${tokenType} ${token}`);

        storeToken(token);

        setTimeout(() => removeToken(), expire);
        dispatch(loaderDeactivateAction());
        dispatch(setUser({ user: decodedData }));
      })
      .catch((e: AxiosError): void => {
        dispatch(loaderDeactivateAction());
        const errors = e?.response?.data;
        dispatch(setError({ errors, page: 'login' }));
      });
  };
