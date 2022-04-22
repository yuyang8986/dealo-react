import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './../../app/store';

interface InitialState {
  active: boolean;
}

const initialState: InitialState = {
  active: false,
};

export const loaderSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    activateLoader: () => ({ active: true }),
    deactivateLoader: () => ({ active: false }),
  },
});

export const { activateLoader, deactivateLoader } = loaderSlice.actions;
export const authState = (state: RootState) => state.auth;
export default loaderSlice.reducer;
