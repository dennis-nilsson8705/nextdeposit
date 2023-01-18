import axios from 'axios';

const config = {
  baseUrl: 'http://localhost:80/Deposit',
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'post'
};

type addDepositBody = {
  id: string;
  amount: number;
  isCrypto?: boolean;
  currency?: string;
};

export const addDeposit = async (
  currentUserKey: number,
  data: addDepositBody
): Promise<any> => {
  return await axios({
    ...config,
    url: `${config.baseUrl}/${currentUserKey}`,
    data
  })
    .then((response) => {
      return {
        status: response.status,
        data: response.data
      };
    })
    .catch((error) => {
      return {
        status: error.status,
        data: error.response
      };
    });
};
