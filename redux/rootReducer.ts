import depositSlice from './depositSlice';
import store from './store';

const rootReducer = () => {
  return {
    deposits: depositSlice
  };
};

export default rootReducer;
export type AppRootState = ReturnType<typeof store.getState>;
