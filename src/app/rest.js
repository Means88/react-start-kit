import { transformers } from 'redux-api';

export default {
  example: {
    url: '/api/example/',
    options: {
      headers: {
        Accept: "application/json"
      },
      credentials: 'include'
    },
    transformer: transformers.object
  },
};
