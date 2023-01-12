import { useSelector } from 'react-redux';
import store from '../redux/store';
import DepositButton from './depositbutton';
import DepositInput from './depositInput';
import DepositResult from './depositResult';
import withCharacter from './wrapper';

export const DepositContainer = () => {
  const totalAmount = useSelector(() => store.getState().deposits.totalAmount);
  const showResult = totalAmount > 0;
  return (
    <div className="flex flex-col gap-4 p-20 space-x-4 ">
      <div className="flex flex-1 flex-grow-0 pl-4 ">
        Please enter your deposit below
      </div>
      {withCharacter(DepositInput)}
      {withCharacter(DepositButton)}
      {showResult && (
        <div className="flex flex-1 flex-grow-0 ">
          <DepositResult />
        </div>
      )}
    </div>
  );
};

export default DepositContainer;
