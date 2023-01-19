import { TextField } from '@material-ui/core';
import React from 'react';

export type DepositInputProps = {
  enteredAmount: number;
  handleChange: (e: string | React.SetStateAction<number>) => void;
};

const DepositInput = ({ enteredAmount, handleChange }: DepositInputProps) => {
  return (
    <TextField
      required
      className="pt-4 pb-4 pl-4 pr-4 font-bold border bg max-w-5"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      value={enteredAmount}
    ></TextField>
  );
};

export default DepositInput;
