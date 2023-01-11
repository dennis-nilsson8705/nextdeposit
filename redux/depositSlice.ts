import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { AppRootState } from './rootReducer';

type depositState = {
  totalAmount: number;
  currentAmount: number;
};

const initialState: depositState = {
  totalAmount: 0,
  currentAmount: 0
};

export const depositSlice = createSlice({
  name: 'deposit',
  initialState,
  reducers: {
    setDepositAmount: (state, action: PayloadAction<number>) => {
      const newVal = parseInt((state.totalAmount + action.payload).toString());
      state.totalAmount = newVal;
    },
    setCurrentAmount: (state, action: PayloadAction<number>) => {
      state.currentAmount = action.payload;
    }
  }
});

export const { setDepositAmount, setCurrentAmount } = depositSlice.actions;

export default depositSlice.reducer;
