import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import store from '../redux/store';

export const DepositTotals = () => {
  const totalAmount = useSelector(
    () => store.getState().deposits.totalDeposit.amount
  );
  return (
    <TextField
      disabled={false}
      fullWidth
      multiline={true}
      InputProps={{
        disableUnderline: true
      }}
      value={`Your total is ${totalAmount} NZD`}
    ></TextField>
  );
};

export default DepositTotals;
