import { combineEpics } from 'redux-observable';
import { saveDepositEpic } from './saveDepositEpic';

export const rootEpic = combineEpics(saveDepositEpic);
