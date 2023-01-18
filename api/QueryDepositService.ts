import axios from 'axios';

const config = {
  baseUrl: 'http://localhost:80/Deposit',
  headers: {
    'Content-Type': 'application/json'
  },

  method: 'get'
};

export const getDepositByUserKey = async (
  currentUserKey: number
): Promise<any> => {
  return await axios({
    ...config,
    url: `${config.baseUrl}/total/${currentUserKey}`
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
