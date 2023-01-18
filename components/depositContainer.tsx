import { useSelector } from 'react-redux';
import store from '../redux/store';
import DepositButton from './depositbutton';
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

  const showResult = totalAmount;
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col gap-4 p-20 space-x-4 ">
        <div className="flex flex-1 flex-grow-0 pl-4 ">
          Please enter your user id below
        </div>
        {<DepositUserInput />}
        <div className="flex flex-1 flex-grow-0 ">
          Please enter your deposit below
        </div>
        {<DepositInput value={currentDeposit} />}
        {withCharacter(DepositButton)}
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
