import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
export type DepositInputProps = {
  handleChange: any;
};

const DepositInput = () => {
  return (
    <TextField className="h-8 pt-4 pb-4 pl-4 pr-4 font-bold rounded "></TextField>
  );
};

export default DepositInput;
