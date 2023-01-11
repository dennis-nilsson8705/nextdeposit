import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from '../epics/rootEpic';

import rootReducer from './rootReducer';
const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: rootReducer(),
  middleware: [epicMiddleware]
});
epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
