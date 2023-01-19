import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Fade } from '@material-ui/core';

type DepositResultProps = {
  submittedAmount: number;
};

export const DepositResult = ({ submittedAmount }: DepositResultProps) => {
  return (
    <Fade in={true} timeout={1000}>
      <TextField
        disabled={false}
        fullWidth
        multiline={true}
        InputProps={{
          disableUnderline: true
        }}
        value={`You have submitted a deposit of ${submittedAmount} NZD`}
      ></TextField>
    </Fade>
  );
};

export default DepositResult;
