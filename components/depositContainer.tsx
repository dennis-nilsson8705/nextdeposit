import { useSelector } from 'react-redux';
import store from '../redux/store';
import DepositButtonContainer from './depositButtonContainer';
import DepositInputContainer from './depositInputContainer';
import DepositResultContainer from './depositResultContainer';
import DepositTotalsContainer from './depositTotalsContainer';
import DepositUserInputContainer from './depositUserInputContainer';

export const DepositContainer = () => {
  const stateDeposits = useSelector(() => store.getState().deposits);
  const showResult = stateDeposits.showResult;
  const currentDeposit = stateDeposits.currentDeposit.amount;
  const currentUserKey = stateDeposits.currentUserKey ?? 0;
  const shouldReset = stateDeposits.shouldReset;

  const withResultElement = showResult && (
    <div className="flex flex-1 flex-grow-0 ">
      <DepositResultContainer />
    </div>
  );

  const withDepositInputElement = (
    <>
      <div className="flex flex-row peer">
        <DepositInputContainer
          enteredAmount={currentDeposit}
          shouldReset={shouldReset ?? false}
        />

        {currentDeposit === 0 && (
          <p className="font-light text-red-700 peer-invalid:visible">*</p>
        )}
      </div>
    </>
  );

  const withUserInputElement = (
    <div className="flex flex-row peer">
      <DepositUserInputContainer />
      {currentUserKey < 1 && (
        <p className="font-light text-red-700 peer-invalid:visible">*</p>
      )}
    </div>
  );

  return (
    <div className="flex flex-row ">
      <div className="flex flex-col gap-4 p-20 space-x-4 ">
        <div className="flex flex-1 flex-grow-0 pl-4 ">
          Please enter your user id below
        </div>
        {withUserInputElement}
        <div className="flex flex-1 flex-grow-0 ">
          Please enter your deposit below
        </div>
        {withDepositInputElement}
        <DepositButtonContainer />
        {withResultElement}
      </div>
      <div className="flex p-20">
        <DepositTotalsContainer />
      </div>
    </div>
  );
};

export default DepositContainer;
