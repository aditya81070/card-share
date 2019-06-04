import React from 'react';

// File Imports
import Header from '../modules/App/Header';

class AppWrapper extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="app-cont bg-app">{this.props.children}</div>
      </div>
    );
  }
}

export default AppWrapper;
