import { mergeMap, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { depositSaveSuccess, setDepositAmount } from '../redux/depositSlice';
import { addDeposit } from '../api/AddDepositService';
import { uuid } from 'uuidv4';

export const saveDepositEpic = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(setDepositAmount),
    mergeMap((action: any) => {
      addDeposit('http://localhost:5420/Deposit', {
        id: uuid(),
        amount: action.payload.amount
      });
      //get total amount for this user and pass to depositSaveSuccess and update state
      return of(depositSaveSuccess());
    })
  );
};
