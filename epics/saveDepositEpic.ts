import { mergeMap, of } from 'rxjs';
import { ofType } from 'redux-observable';
import { depositSaveSuccess, setDepositAmount } from '../redux/depositSlice';
import { addDeposit } from '../api/AddDepositService';
import { getDepositByUserKey } from '../api/QueryDepositService';

import { v4 } from 'uuid';

export const saveDepositEpic = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(setDepositAmount),
    mergeMap(async (action: any) => {
      await addDeposit(action.payload.currentUserKey, {
        id: v4(),
        amount: action.payload.amount
      });

      const userTotal = await getDepositByUserKey(
        action.payload.currentUserKey
      );
      return depositSaveSuccess({ amount: userTotal.data });
    })
  );
};
