import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

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
      state.totalAmount = state.totalAmount + action.payload;
    },
    setCurrentAmount: (state, action: PayloadAction<number>) => {
      state.currentAmount = action.payload;
    },
    depositSaveSuccess: () => {}
  }
});

export const { setDepositAmount, setCurrentAmount, depositSaveSuccess } =
  depositSlice.actions;

export default depositSlice.reducer;
