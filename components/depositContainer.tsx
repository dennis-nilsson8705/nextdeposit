import DepositButton from './depositbutton';
import DepositInput from './depositInput';
import DepositResult from './depositResult';

export default function DepositContainer() {
  return (
    <div className="flex flex-col gap-4 p-20 space-x-4 ">
      <div className="flex flex-1 flex-grow-0 pl-4 ">
        Please enter your deposit below
      </div>
      <div className="flex flex-1 flex-grow-0 ">
        <DepositInput />
      </div>
      <div className="flex flex-1 flex-grow-0 ">
        <DepositButton />
      </div>
      <div className="flex flex-1 flex-grow-0 ">
        <DepositResult />
      </div>
    </div>
  );
}
