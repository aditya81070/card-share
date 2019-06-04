import React from 'react';

export class Card4 extends React.Component {
  render() {
    return (
      <div className="card card4 mx-auto text-center text-dark">
        <p className="company-name pt-2">Company Name</p>
        <p className="name">Full Name</p>
        <p className="designation">Designation</p>
        <div className="content mt-1">
          <p>Phone No., Alternate no.</p>
          <p>sample@email.com</p>
          <p>www.website.com</p>
          <p>Office : street, city, state, country, pincode</p>
          <p>Home : street, city, state, country, pincode</p>
        </div>
      </div>
    );
  }
}
