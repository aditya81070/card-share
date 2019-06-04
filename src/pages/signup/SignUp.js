import React from 'react';

import PageWrapper from '../../components/wrapper/PageWrapper';
import SignUpPage from './includes/SignUpPage';

export class SignUp extends React.Component {
  render() {
    return (
      <PageWrapper>
        <SignUpPage background="bg-red" />
      </PageWrapper>
    );
  }
}
