import axios from 'axios';

const config = {
  baseUrl: 'https://localhost:5420/Deposit',
  headers: {
    Authorization: ''
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
  url: string,
  data: addDepositBody
): Promise<any> => {
  return await axios({
    ...config,
    url: `${config.baseUrl}/${url}`,
    data
  })
    .then((response) => {
      console.log(response);
      return {
        status: response.status,
        data: response.data
      };
    })
    .catch((error) => {
      console.log(error);
      return {
        status: error.status,
        data: error.response
      };
    });
};
