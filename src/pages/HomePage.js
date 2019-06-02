import React from 'react';

import PageWrapper from '../components/wrapper/PageWrapper';
import Banner from '../components/includes/Banner';
import About from '../components/includes/About';
import Features from '../components/includes/Features';
import '../assets/styles/App.scss'

class HomePage extends React.Component {
  render() {
    return (
      <PageWrapper>
        <Banner background='bg-blue' link='home'/>
        <About background='bg-red' link='about'/>
        <Features background='bg-blue' link='features'/>
      </PageWrapper>
    );
  }
}

export default HomePage;
