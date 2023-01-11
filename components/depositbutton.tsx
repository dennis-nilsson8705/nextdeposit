import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTotalDepositAmount } from '../redux/depositSlice';
import store from '../redux/store';

const DepositButton = () => {
  const [title, setTitle] = useState('Submit');
  const dispatch = useDispatch();
  function handleClick() {
    const currentState = store.getState();
    const addTodo = dispatch(setTotalDepositAmount(3));
    title === 'Submit' && setTitle('Success');
  }
  return (
    <button
      className="pt-4 pb-4 pl-4 pr-4 font-bold text-white bg-gray-600 rounded hover:bg-blue-700"
      onClick={handleClick}
      // disabled={title === 'Success'}
    >
      {title}
    </button>
  );
};

export default DepositButton;
