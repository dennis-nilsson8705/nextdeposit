import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addActionPayload,
  resetDepositInput,
  setDepositAmount
} from '../redux/depositSlice';
import store from '../redux/store';

const DepositButton = () => {
  const [title, setTitle] = useState('Submit');
  const dispatch = useDispatch();

  function handleClick() {
    const currentState = store.getState();
    const amount = currentState.deposits.currentDeposit.amount;
    const currentUserKey = currentState.deposits.currentUserKey ?? 0;

    if (title === 'Submit' && amount > 0) {
      dispatch(
        setDepositAmount({ amount, currentUserKey } as addActionPayload)
      );
      setTitle('Success! Click again');
    } else {
      dispatch(resetDepositInput());
      setTitle('Submit');
    }
  }

  return (
    <button
      className="pt-4 pb-4 pl-4 pr-4 font-bold text-white rounded bg-cyan-700 hover:bg-gray-700"
      onClick={() => {
        handleClick();
      }}
    >
      {title}
    </button>
  );
};

export default DepositButton;
