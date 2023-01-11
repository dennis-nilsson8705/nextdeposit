import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type depositState = {
  totalAmount: number;
};

const initialState: depositState = {
  totalAmount: 0
};

export const depositSlice = createSlice({
  name: 'deposit',
  initialState,
  reducers: {
    setTotalDepositAmount: (state: any, action: PayloadAction<number>) => {
      state.totalAmount = state.totalAmount + action.payload;
    }
  }
});

export const { setTotalDepositAmount } = depositSlice.actions;

export default depositSlice.reducer;
