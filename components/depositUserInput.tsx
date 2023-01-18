import { TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveCurrentUser, setCurrentUserPayload } from '../redux/depositSlice';

const DepositUserInput = () => {
  const [currentUser, setCurrentUser] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (e: string) => {
    const userKey = parseInt(e);
    setCurrentUser(userKey);
    dispatch(
      saveCurrentUser({ currentUserKey: userKey } as setCurrentUserPayload)
    );
  };
  return (
    <div className="flex flex-col">
      <TextField
        className="w-10 font-bold "
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      ></TextField>
    </div>
  );
};

export default DepositUserInput;
