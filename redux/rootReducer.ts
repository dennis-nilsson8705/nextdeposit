import depositSlice from './depositSlice';

const rootReducer = () => {
  return {
    allProduct: depositSlice
  };
};

export default rootReducer;
