import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveCurrentUser, setCurrentUserPayload } from '../redux/depositSlice';
import store from '../redux/store';
import DepositUserInput from './depositUserInput';

export type DepositUserInputProps = {
  currentUserKey: number;
};

const DepositUserInputContainer = () => {
  const dispatch = useDispatch();
  const currentUserKey =
    useSelector(() => store.getState().deposits.currentUserKey) ?? 0;

  const handleChange = (e: string) => {
    const userKey = parseInt(e);
    dispatch(
      saveCurrentUser({ currentUserKey: userKey } as setCurrentUserPayload)
    );
  };
  return (
    <DepositUserInput
      currentUserKey={currentUserKey}
      handleChange={handleChange}
    />
  );
};

export default DepositUserInputContainer;
