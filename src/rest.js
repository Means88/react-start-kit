import reduxApi from 'redux-api';
import example from './app/rest';

const adapter = (fetch) => {
  return function (url, opts) {
    return fetch(url, opts).then((response) => {
      if (response.status != 200) {
        return response.json().then((data) => {
          return {
            ...data,
            status: response.status,
          };
        });
      }
      return response.json();
    });
  };
};
export default reduxApi({
  ...example
}).use("fetch", adapter(fetch));

