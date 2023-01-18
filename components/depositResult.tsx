import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import { Fade } from '@material-ui/core';

export const DepositResult = () => {
  const totalAmount = useSelector(
    () => store.getState().deposits.currentDeposit.amount
  );

  return (
    <Fade in={true}>
      <TextField
        disabled={false}
        fullWidth
        multiline={true}
        InputProps={{
          disableUnderline: true
        }}
        value={`You have submitted a deposit of ${totalAmount} NZD`}
      ></TextField>
    </Fade>
  );
};

export default DepositResult;
