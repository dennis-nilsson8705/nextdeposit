import React from 'react';
import TextField from '@material-ui/core/TextField';

export type DepositTotalsProps = {
  totalAmount: number;
};

export const DepositTotals = ({ totalAmount }: DepositTotalsProps) => {
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
