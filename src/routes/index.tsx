import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Homepage from '../pages/Homepage';

import AccountManagement from '../pages/AccountManagement';
import ProductsManagement from '../pages/ProductsManagement';
import Cart from '../pages/Cart';

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
    <Route path="/account" component={AccountManagement} isPrivate />
    <Route path="/cart" component={Cart} isPrivate />
  </Switch>
);

export default Routes;
