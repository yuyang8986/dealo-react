import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import modalReducer from '../features/modal/modalSlice';
import companySlice from '../pages/Company/companySlice';
import employeeSlice from '../pages/Employee/employeeSlice';
import authSlice from '../pages/LoginPage/loginSlice';
import loaderSlice from './../components/loader/loaderSlice';
import stageSlice from './../pages/DealsPage/stageSlice';
import dashboardSlice from './../pages/HomePage/dashboardSlice';
import personSlice from './../pages/Person/personSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    modal: modalReducer,
    auth: authSlice,
    employees: employeeSlice,
    company: companySlice,
    persons: personSlice,
    dashboard: dashboardSlice,
    stage: stageSlice,
    loader: loaderSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
