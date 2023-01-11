import React from 'react';
import TextField from '@material-ui/core/TextField';

const DepositResult = () => {
  return (
    <TextField
      disabled={true}
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
