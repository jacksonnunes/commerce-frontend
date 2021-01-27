import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Homepage from '../pages/Homepage';
import ProductsManagement from '../pages/ProductsManagement';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Signin} />
    <Route path="/signup" component={Signup} />

    <Route path="/home" component={Homepage} isPrivate />
    <Route
      path="/products-management"
      component={ProductsManagement}
      isPrivate
    />
  </Switch>
);

export default Routes;
