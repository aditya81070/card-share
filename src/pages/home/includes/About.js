import React from 'react';

export class About extends React.Component {
  render() {
    return (
      <div className="container-fluid text-center about">
        <div className="h-25">
          <h1 className="about-title py-5">ABOUT</h1>
        </div>
        <div className="h-75 py-5">
          <p className="about-text">
            This application will make the process of sharing buisness cards
            fast and easy.
            <br />
            Now, you need not to worry about to keeping the buisness card in
            your wallet.
            <br />
            <br />
            Your card is just one click away !!
          </p>
        </div>
      </div>
    );
  }
}
