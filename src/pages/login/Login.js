import React from 'react';

import PageWrapper from '../../components/wrapper/PageWrapper';
import LoginPage from './includes/LoginPage';

export class Login extends React.Component {
  render() {
    return (
      <PageWrapper>
        <LoginPage background="bg-red" />
      </PageWrapper>
    );
  }
}
