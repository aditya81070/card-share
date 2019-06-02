import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './assets/styles/App.scss';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import CreateCardPage from './pages/CreateCardPage'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/login' exact component={LoginPage} />
          <Route path='/signup' exact component={SignUpPage} />
          <Route path='/create-card' exact component={CreateCardPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
