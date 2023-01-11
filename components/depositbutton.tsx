import React, { useState } from 'react';
import store from '../redux/store';

const DepositButton = () => {
  const [title, setTitle] = useState('Submit');
  function handleClick() {
    const currentState = store.getState();
    console.log(currentState);

    title === 'Submit' && setTitle('Success');
  }
  return (
    <button
      className="pt-4 pb-4 pl-4 pr-4 font-bold text-white bg-gray-600 rounded hover:bg-blue-700"
      onClick={handleClick}
      disabled={title === 'Success'}
    >
      {title}
    </button>
  );
};

export default DepositButton;
