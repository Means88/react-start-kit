import React from 'react';
import { Route } from 'react-router';
import example from './app/router';

export default (store) => {
  return (
    <Route>
      {example()}
    </Route>
  );
};
