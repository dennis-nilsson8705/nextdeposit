import React from 'react';
import TextField from '@material-ui/core/TextField';

export const DepositResult = () => {
  return (
    <TextField
      disabled={false}
      fullWidth
      multiline={true}
      InputProps={{
        disableUnderline: true
      }}
      value={'You have submitted a deposit of 300 NZD'}
    ></TextField>
  );
};

export default DepositResult;
