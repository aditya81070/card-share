import React from 'react';

import PageWrapper from '../../components/wrapper/PageWrapper';
import { Banner, About, Features } from './includes';

export class Home extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Banner background="bg-blue" link="home" />
        <About background="bg-red" link="about" />
        <Features background="bg-blue" link="features" />
      </PageWrapper>
    );
  }
}
