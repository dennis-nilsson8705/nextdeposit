import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import store from '../redux/store';

export const DepositResult = () => {
  const totalAmount = useSelector(() => store.getState().deposits.totalAmount);

  return (
    <TextField
      disabled={false}
      fullWidth
      multiline={true}
      InputProps={{
        disableUnderline: true
      }}
      value={`You have submitted a deposit of ${totalAmount} NZD`}
    ></TextField>
  );
};

export default DepositResult;
