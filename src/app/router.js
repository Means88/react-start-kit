import React from 'react';
import { Route } from 'react-router';
import { ExampleContainer } from './containers';

export default () => {
  return (
    <Route path="example" component={ExampleContainer}>
    </Route>
  );
};
