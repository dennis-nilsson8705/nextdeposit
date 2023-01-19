import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  addActionPayload,
  resetDepositInput,
  setDepositAmount
} from '../redux/depositSlice';
import store from '../redux/store';
import DepositButton from './depositbutton';
import withCharacter from './wrapper';

const DepositButtonContainer = () => {
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

  return withCharacter(() => (
    <DepositButton handleClick={handleClick} title={title} />
  ));
};

export default DepositButtonContainer;
