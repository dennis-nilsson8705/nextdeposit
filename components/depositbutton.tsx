import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setDepositAmount } from '../redux/depositSlice';
import store from '../redux/store';

const DepositButton = () => {
  const [title, setTitle] = useState('Submit');
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();

  function handleClick() {
    const currentState = store.getState();
    const amount = currentState.deposits.currentAmount;

    dispatch(setDepositAmount(amount));

    if (title === 'Submit') {
      setTitle('Success');
      setIsEnabled(true);
    } else {
      setTitle('Submit');
      setIsEnabled(false);
    }
  }

  return (
    <button
      className="pt-4 pb-4 pl-4 pr-4 font-bold text-white rounded bg-cyan-700 hover:bg-gray-700"
      onClick={() => {
        handleClick();
      }}
      disabled={isEnabled}
    >
      {title}
    </button>
  );
};

export default DepositButton;
