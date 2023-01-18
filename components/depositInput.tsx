import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentAmount, depositResetSuccess } from '../redux/depositSlice';
import store from '../redux/store';

export type DepositInputProps = {
  value: number;
  shouldReset: boolean;
};

const DepositInput = ({ value, shouldReset }: DepositInputProps) => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const allowOnlyNumber = (value: string) => {
    return value.replace(/[^0-9]/g, '');
  };

  const handleChange = (e: string | React.SetStateAction<number>) => {
    if (shouldReset === true) {
      setAmount(0);
      dispatch(depositResetSuccess());
    }

    const sanitizedValue = allowOnlyNumber(e.toString());
    const newAmount = parseInt(sanitizedValue);
    setAmount(newAmount);
    dispatch(setCurrentAmount(newAmount));
  };

  return (
    <TextField
      className="pt-4 pb-4 pl-4 pr-4 font-bold bg max-w-5"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
      value={value}
    ></TextField>
  );
};

export default DepositInput;
