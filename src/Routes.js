import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Home,
  Login,
  SignUp,
  EditCard,
  Profile,
  SelectCardWizard,
  Dashboard
} from './pages';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/edit-card" exact component={EditCard} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/select-card" exact component={SelectCardWizard} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
