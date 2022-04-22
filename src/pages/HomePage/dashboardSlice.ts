import { RootState } from './../../app/store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  data: any;
  selected: string;
  activities: any[];
  errors: object;
  page: string;
}

interface ErrorSet {
  errors: object;
  page: string;
}

const initialState: InitialState = {
  activities: [],
  data: {},
  selected: '',
  errors: {},
  page: '',
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<{ data: any }>) => {
      const { data } = action.payload;
      return {
        ...state,
        data,
      };
    },
    setSelected: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      return {
        ...state,
        selected: id,
      };
    },
    setActivities: (state, action: PayloadAction<{ activities: any[] }>) => {
      const { activities } = action.payload;
      return {
        ...state,
        activities,
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

export const { setData, setSelected, setError, setActivities } =
  dashboardSlice.actions;
export const dashboardState = (state: RootState) => state.dashboard;
export default dashboardSlice.reducer;
