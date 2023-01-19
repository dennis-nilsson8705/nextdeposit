import { TextField } from '@material-ui/core';
import React from 'react';

export type DepositUserInputProps = {
  currentUserKey: number;
  handleChange: (e: string) => void;
};

const DepositUserInput = ({
  currentUserKey,
  handleChange
}: DepositUserInputProps) => {
  return (
    <div className="flex flex-col">
      <TextField
        className="w-10 font-bold "
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        value={currentUserKey}
      ></TextField>
    </div>
  );
};

export default DepositUserInput;
