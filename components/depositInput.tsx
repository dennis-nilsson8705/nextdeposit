import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentAmount } from '../redux/depositSlice';
import store from '../redux/store';

const DepositInput = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setAmount(e);
    dispatch(setCurrentAmount(e));
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
