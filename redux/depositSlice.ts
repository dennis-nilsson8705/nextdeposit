import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type deposit = {
  amount: number;
  currency: string;
};

type depositState = {
  totalDeposit: deposit;
  currentDeposit: deposit;
  shouldReset?: boolean;
  showResult?: boolean;
  currentUserKey?: number;
};

const initialState: depositState = {
  totalDeposit: {
    amount: 0,
    currency: 'NZD'
  },
  currentDeposit: {
    amount: 0,
    currency: 'NZD'
  },
  currentUserKey: 0
};

export type addActionPayload = {
  amount: number;
};

export type setCurrentUserPayload = {
  currentUserKey: number;
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
    depositSaveSuccess: (state) => {
      state.showResult = true;
    },
    resetDepositInput: (state) => {
      state.currentDeposit = {
        amount: 0,
        currency: state.totalDeposit.currency
      };
      state.shouldReset = true;
      state.showResult = false;
    },
    depositResetSuccess: (state) => {
      state.shouldReset = false;
    },
    saveCurrentUser: (state, action: PayloadAction<setCurrentUserPayload>) => {
      state.currentUserKey = action.payload.currentUserKey;
    }
  }
});

export const {
  setDepositAmount,
  setCurrentAmount,
  depositSaveSuccess,
  resetDepositInput,
  depositResetSuccess,
  saveCurrentUser
} = depositSlice.actions;

export default depositSlice.reducer;
