import DepositButton from './depositbutton';
import DepositInput from './depositInput';
import DepositResult from './depositResult';
import withCharacter from './wrapper';

export const DepositContainer = () => {
  return (
    <div className="flex flex-col gap-4 p-20 space-x-4 ">
      <div className="flex flex-1 flex-grow-0 pl-4 ">
        Please enter your deposit below
      </div>
      {withCharacter(DepositInput)}
      {withCharacter(DepositButton)}
      {withCharacter(DepositResult)}
    </div>
  );
};

export default DepositContainer;
