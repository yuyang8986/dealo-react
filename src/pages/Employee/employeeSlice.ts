import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../../app/store';

interface EmployeeState {
  employees: any[];
  errors: object;
  page: string;
}

interface ErrorSet {
  errors: object;
  page: string;
}

const initialState: EmployeeState = {
  employees: [],
  errors: {},
  page: '',
};

export const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<{ employees: any }>) => {
      const { employees } = action.payload;
      return {
        ...state,
        employees,
      };
    },
    addEmployee: (state, action: PayloadAction<{ item: any }>) => {
      const { item } = action.payload;
      return {
        ...state,
        employees: [item, ...state.employees],
        errors: {},
        page: '',
      };
    },
    removeEmployee: (state, action: PayloadAction<{ id: any }>) => {
      const { id } = action.payload;
      const employees = Array.from(state.employees).filter(
        (item: any) => item.id !== id
      );

      return {
        ...state,
        employees,
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

export const { setEmployees, setError, addEmployee, removeEmployee } =
  employeeSlice.actions;
export const authState = (state: RootState) => state.auth;
export default employeeSlice.reducer;
