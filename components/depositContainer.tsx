import { useSelector } from 'react-redux';
import store from '../redux/store';
import DepositButton from './depositbutton';
import DepositButtonContainer from './depositButtonContainer';
import DepositInput from './depositInput';
import DepositResult from './depositResult';
import DepositTotals from './depositTotals';
import DepositUserInput from './depositUserInput';
import withCharacter from './wrapper';

export const DepositContainer = () => {
  const totalAmount = useSelector(() => store.getState().deposits.showResult);
  const currentDeposit = useSelector(
    () => store.getState().deposits.currentDeposit.amount
  );
  const currentUserKey =
    useSelector(() => store.getState().deposits.currentUserKey) ?? 0;
  const shouldReset = useSelector(() => store.getState().deposits.shouldReset);

  const showResult = totalAmount;

  return (
    <div className="flex flex-row ">
      <div className="flex flex-col gap-4 p-20 space-x-4 ">
        <div className="flex flex-1 flex-grow-0 pl-4 ">
          Please enter your user id below
        </div>
        <div className="flex flex-row peer">
          <DepositUserInput value={currentUserKey} />
          {currentUserKey < 1 && (
            <p className="font-light text-red-700 peer-invalid:visible">*</p>
          )}
        </div>
        <div className="flex flex-1 flex-grow-0 ">
          Please enter your deposit below
        </div>
        {
          <>
            <div className="flex flex-row peer">
              <DepositInput
                value={currentDeposit}
                shouldReset={shouldReset ?? false}
              />
              {currentDeposit === 0 && (
                <p className="font-light text-red-700 peer-invalid:visible">
                  *
                </p>
              )}
            </div>
          </>
        }
        {/* {withCharacter(DepositButton)} */}
        <DepositButtonContainer />
        {showResult && (
          <div className="flex flex-1 flex-grow-0 ">
            <DepositResult />
          </div>
        )}
      </div>
      <div className="flex p-20">
        <DepositTotals />
      </div>
    </div>
  );
};

export default DepositContainer;
