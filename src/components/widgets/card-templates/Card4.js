import React from 'react';

export class Card4 extends React.Component {
  render() {
    return (
      <div className="card card4 mx-auto text-center text-dark">
        <p className="company-name pt-2">{this.props.details.company}</p>
        <p className="name">{this.props.details.name}</p>
        <p className="designation">this.props.details.designation</p>
        <div className="content mt-1">
          <p>
            {this.props.details.contact}, {this.props.details.alternateContact}
          </p>
          <p>{this.props.details.email}</p>
          <p>{this.props.details.website}</p>
          <p>Office : {this.props.details.addressOffice}</p>
          <p>Home : {this.props.details.addressHome}</p>
        </div>
      </div>
    );
  }
}
