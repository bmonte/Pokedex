import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Pokedex from '../pages/Pokedex';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Pokedex} />
  </Switch>
);

export default Routes;
