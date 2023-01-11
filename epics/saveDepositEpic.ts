import { mergeMap, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { depositSaveSuccess, setDepositAmount } from '../redux/depositSlice';

export const saveDepositEpic = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(setDepositAmount),
    mergeMap((action: any) => {
      return of(depositSaveSuccess());
    })
  );
};
