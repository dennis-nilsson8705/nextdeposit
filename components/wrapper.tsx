import React, { FC } from 'react';

const withCharacter = (Component: any) => {
  return (
    <div className="flex flex-1 flex-grow-0 ">
      <Component />
    </div>
  );
};

export default withCharacter;
