import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './assets/styles/App.scss';
import HomePage from './pages/HomePage'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
