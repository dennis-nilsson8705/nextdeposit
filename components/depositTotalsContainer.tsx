import React from 'react';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import DepositTotals from './depositTotals';

export const DepositTotalsContainer = () => {
  const totalAmount = useSelector(
    () => store.getState().deposits.totalDeposit.amount
  );
  return <DepositTotals totalAmount={totalAmount} />;
};

export default DepositTotalsContainer;
