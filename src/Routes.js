import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Home,
  Login,
  SignUp,
  EditCard,
  Profile,
  SelectCardWizard,
  Dashboard,
  ResetPassword
} from './pages';

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/edit-card/:userId" exact component={EditCard} />
          <Route path="/profile/:userId" exact component={Profile} />
          <Route path="/select-card/:userId" exact component={SelectCardWizard} />
          <Route path="/dashboard/:userId" exact component={Dashboard} />
          <Route path="/reset-password/:userId" exact component={ResetPassword} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
