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

export const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    setPersons: (state, action: PayloadAction<{ persons: any }>) => {
      const { persons } = action.payload;
      return {
        ...state,
        all: persons,
      };
    },
    removePerson: (state, action: PayloadAction<{ id: any }>) => {
      const { id } = action.payload;
      const all = Array.from(state.all).filter((item) => item.id !== id);
      return {
        ...state,
        all,
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

export const { setPersons, setError, removePerson } = personSlice.actions;
export const authState = (state: RootState) => state.auth;
export default personSlice.reducer;
