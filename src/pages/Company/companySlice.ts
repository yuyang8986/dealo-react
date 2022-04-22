import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../../app/store';

interface InitialState {
  all: any[];
  errors: object;
  page: string;
}

interface ErrorSet {
  errors: object;
  page: string;
}

const initialState: InitialState = {
  all: [],
  errors: {},
  page: '',
};

export const companySlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setCompanies: (state, action: PayloadAction<{ companies: any }>) => {
      const { companies } = action.payload;
      return {
        ...state,
        all: companies,
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
    removeCompany: (state, action: PayloadAction<{ id: any }>) => {
      const { id } = action.payload;
      const data = Array.from(state.all);
      const allData = data.filter((item: any) => item.id !== id);

      return {
        ...state,
        all: allData,
      };
    },
  },
});

export const { setCompanies, setError, removeCompany } = companySlice.actions;
export const authState = (state: RootState) => state.auth;
export default companySlice.reducer;
