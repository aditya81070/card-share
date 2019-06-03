import React from 'react';

// Material UI

// File Imports
import Header from '../modules/App/Header';

class AppWrapper extends React.Component {
  render() {
    console.log(this.props.children)
    return (
      <div>
        <Header />
        <div className="app-cont bg-app">
           {this.props.children}
        </div>

      </div>
    );
  }
}

export default AppWrapper;