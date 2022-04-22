import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../../app/store';

interface StageState {
  all: any[];
  selected: string;
  errors: object;
  page: string;
  deal: any;
}

interface ErrorSet {
  errors: object;
  page: string;
}

const initialState: StageState = {
  all: [],
  selected: '',
  errors: {},
  page: '',
  deal: {},
};

const stageSlice = createSlice({
  name: 'stage',
  initialState,
  reducers: {
    setStages: (state, action: PayloadAction<{ stages: any }>) => {
      const { stages } = action.payload;
      return {
        ...state,
        all: stages,
      };
    },
    setEmployee: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      return {
        ...state,
        selected: id,
      };
    },
    addDeal: (state, action: PayloadAction<{ deal: any }>) => {
      const { deal } = action.payload;
      const allItems = [...state.all];

      allItems.map((item: any) => {
        if (item?.id === deal?.stageId) {
          item.pipelines.push(deal);
        }
        return item;
      });
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

export const { setStages, setError, setEmployee, addDeal } = stageSlice.actions;
export const authState = (state: RootState) => state.auth;
export default stageSlice.reducer;
