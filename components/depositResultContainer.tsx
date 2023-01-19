import React from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import DepositResult from './depositResult';

export const DepositResultContainer = () => {
  const submittedAmount = useSelector(
    () => store.getState().deposits.currentDeposit.amount
  );

  return <DepositResult submittedAmount={submittedAmount} />;
};

export default DepositResultContainer;
