import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentAmount, depositResetSuccess } from '../redux/depositSlice';
import DepositInput from './depositInput';

export type DepositInputContainerProps = {
  shouldReset: boolean;
  enteredAmount: number;
};

const DepositInputContainer = ({
  shouldReset,
  enteredAmount
}: DepositInputContainerProps) => {
  const dispatch = useDispatch();
  const allowOnlyNumber = (value: string) => {
    return value.replace(/[^0-9]/g, '');
  };

  const handleChange = (e: string | React.SetStateAction<number>) => {
    if (shouldReset === true) {
      dispatch(depositResetSuccess());
    }

    const sanitizedValue = allowOnlyNumber(e.toString());
    const newAmount = parseInt(sanitizedValue);
    dispatch(setCurrentAmount(newAmount));
  };

  return (
    <DepositInput enteredAmount={enteredAmount} handleChange={handleChange} />
  );
};

export default DepositInputContainer;
