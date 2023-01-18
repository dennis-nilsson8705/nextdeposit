import axios from 'axios';

const config = {
  baseUrl: process.env.NEXT_PUBLIC_SERVICE_URL,
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
