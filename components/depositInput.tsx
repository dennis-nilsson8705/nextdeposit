import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentAmount } from '../redux/depositSlice';

const DepositInput = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const allowOnlyNumber = (value: string) => {
    return value.replace(/[^0-9]/g, '');
  };

  const handleChange = (e: string | React.SetStateAction<number>) => {
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
      value={amount}
    ></TextField>
  );
};

export default DepositInput;
