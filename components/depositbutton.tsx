import React from 'react';

type DepositButtonProps = {
  handleClick: () => void;
  title: string;
};
const DepositButton = ({ handleClick, title }: DepositButtonProps) => {
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
