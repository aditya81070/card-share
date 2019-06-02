import React from 'react';

import PageWrapper from '../components/wrapper/PageWrapper';
import Login from '../components/includes/Login';
import '../assets/styles/App.scss'

class LoginPage extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Login background='bg-red'/>
      </PageWrapper>
    );
  }
}

export default LoginPage;
