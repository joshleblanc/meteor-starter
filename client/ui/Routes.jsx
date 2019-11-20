import React from 'react';
import Index from './pages/Index';
import { Route, Switch } from 'react-router-dom';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
  );
};
