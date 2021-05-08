import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Homepage from '../pages/Homepage';
import ProductsMenu from '../pages/ProductsMenu';

import AccountManagement from '../pages/AccountManagement';
import ProductsManagement from '../pages/ProductsManagement';
import Cart from '../pages/Cart';
import Address from '../pages/Address';
import CreateAddress from '../pages/Address/CreateAddress';
import UpdateAddress from '../pages/Address/UpdateAddress';
import Orders from '../pages/Orders';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Signin} />
    <Route path="/signup" component={Signup} />

    <Route path="/home" component={Homepage} isPrivate />
    <Route path="/menu" component={ProductsMenu} isPrivate />
    <Route
      path="/products-management"
      component={ProductsManagement}
      isPrivate
    />
    <Route path="/account" component={AccountManagement} isPrivate />
    <Route path="/cart" component={Cart} isPrivate />
    <Route path="/address" exact component={Address} isPrivate />
    <Route path="/address/create" component={CreateAddress} isPrivate />
    <Route path="/address/update" component={UpdateAddress} isPrivate />
    <Route path="/orders" component={Orders} isPrivate />
  </Switch>
);

export default Routes;
