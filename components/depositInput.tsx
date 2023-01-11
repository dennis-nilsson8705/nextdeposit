import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentAmount } from '../redux/depositSlice';

const DepositInput = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (e: string | React.SetStateAction<number>) => {
    const convertedInput = parseInt(e.toString());
    setAmount(convertedInput);
    dispatch(setCurrentAmount(convertedInput));
  };

  return (
    <TextField
      className="pt-4 pb-4 pl-4 pr-4 font-bold bg max-w-5"
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    ></TextField>
  );
};

export default DepositInput;
