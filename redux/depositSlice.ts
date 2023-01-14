import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type deposit = {
  amount: number;
  currency: string;
};

type depositState = {
  totalDeposit: deposit;
  currentDeposit: deposit;
};

const initialState: depositState = {
  totalDeposit: {
    amount: 0,
    currency: 'NZD'
  },
  currentDeposit: {
    amount: 0,
    currency: 'NZD'
  }
};

export type addActionPayload = {
  amount: number;
};

export const depositSlice = createSlice({
  name: 'deposit',
  initialState,
  reducers: {
    setDepositAmount: (state, action: PayloadAction<addActionPayload>) => {
      state.totalDeposit = {
        amount: (state.totalDeposit.amount =
          state.totalDeposit.amount + action.payload.amount),
        currency: state.totalDeposit.currency
      };
    },
    setCurrentAmount: (state, action: PayloadAction<number>) => {
      state.currentDeposit = {
        amount: action.payload,
        currency: state.totalDeposit.currency
      };
    },
    depositSaveSuccess: () => {}
  }
});

export const { setDepositAmount, setCurrentAmount, depositSaveSuccess } =
  depositSlice.actions;

export default depositSlice.reducer;
