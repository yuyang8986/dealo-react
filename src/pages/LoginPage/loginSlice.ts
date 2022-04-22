import { RootState } from './../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  errors: object;
  page: string;
}

interface ErrorSet {
  errors: object;
  page: string;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: {},
  errors: {},
  page: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ user: any }>) => {
      const { user } = action.payload;
      return {
        ...state,
        user,
        isAuthenticated: Object.keys(user).length > 0,
      };
    },
    setError: (state, action: PayloadAction<ErrorSet>) => {
      const { errors, page } = action.payload;
      return {
        ...state,
        errors,
        page,
      };
    },
  },
});

export const { setUser, setError } = authSlice.actions;
export const authState = (state: RootState) => state.auth;
export default authSlice.reducer;
