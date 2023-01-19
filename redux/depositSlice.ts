import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type addActionPayload = {
  amount: number;
  currentUserKey: number;
};

type deposit = {
  amount: number;
  currency: string;
};

type depositSaveSuccessPayload = {
  amount: number;
};

type depositState = {
  totalDeposit: deposit;
  currentDeposit: deposit;
  shouldReset?: boolean;
  showResult?: boolean;
  currentUserKey?: number;
};

export type setCurrentUserPayload = {
  currentUserKey: number;
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

export const depositSlice = createSlice({
  name: 'deposit',
  initialState,
  reducers: {
    depositResetSuccess: (state) => {
      state.shouldReset = false;
    },
    depositSaveSuccess: (
      state,
      action: PayloadAction<depositSaveSuccessPayload>
    ) => {
      state.showResult = true;
      state.totalDeposit = {
        ...state.totalDeposit,
        amount: action.payload.amount
      };
    },
    resetDepositInput: (state) => {
      state.currentDeposit = {
        amount: 0,
        currency: state.totalDeposit.currency
      };
      state.shouldReset = true;
      state.showResult = false;
    },
    saveCurrentUser: (state, action: PayloadAction<setCurrentUserPayload>) => {
      state.currentUserKey = action.payload.currentUserKey;
    },
    setCurrentAmount: (state, action: PayloadAction<number>) => {
      state.currentDeposit = {
        amount: action.payload,
        currency: state.totalDeposit.currency
      };
    },
    setDepositAmount: (state, action: PayloadAction<addActionPayload>) => {
      state.totalDeposit = {
        amount: (state.totalDeposit.amount =
          state.totalDeposit.amount + action.payload.amount),
        currency: state.totalDeposit.currency
      };
    }
  }
});

export const {
  depositResetSuccess,
  depositSaveSuccess,
  resetDepositInput,
  saveCurrentUser,
  setCurrentAmount,
  setDepositAmount
} = depositSlice.actions;

export default depositSlice.reducer;
