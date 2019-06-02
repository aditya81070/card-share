import React from 'react';

import PageWrapper from '../components/wrapper/PageWrapper';
import SignUp from '../components/includes/SignUp';
import '../assets/styles/App.scss'

class SignUpPage extends React.Component {
  render() {
    return (
      <PageWrapper>
        <SignUp background='bg-red'/>
      </PageWrapper>
    );
  }
}

export default SignUpPage;
