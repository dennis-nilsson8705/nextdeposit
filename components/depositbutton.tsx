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

    if (title === 'Submit') {
      dispatch(setDepositAmount({ amount } as addActionPayload));
      setTitle('Success! Click again');
    } else {
      setTitle('Submit');
      dispatch(resetDepositInput());
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
