import jwtDecode from 'jwt-decode';
const tokenName = 'auth_token';

export const decode = (token: string) => {
  return jwtDecode(token);
};

export const storeToken = (token: string) => {
  localStorage.setItem(tokenName, token);
};

export const getToken = () => {
  return localStorage.getItem(tokenName);
};

export const removeToken = () => {
  localStorage.removeItem(tokenName);
};
