import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from '../pages/Homepage';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Homepage} />
    <Route path="/signin" exact component={Signin} />
    <Route path="/signup" exact component={Signup} />
  </Switch>
);

export default Routes;
