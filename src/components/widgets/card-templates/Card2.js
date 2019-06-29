import React from 'react';

import PhoneIconDark from '../../../assets/img/icons/card-dark/phone.png';
import AddressIconDark from '../../../assets/img/icons/card-dark/address.png';
import EmailIconDark from '../../../assets/img/icons/card-dark/email.png';
import WebsiteIconDark from '../../../assets/img/icons/card-dark/website.png';

export class Card2 extends React.Component {
  render() {
    return (
      <div className="card card2 mx-auto text-dark">
        <div>
          <span className="name">{this.props.details.name}</span>
        </div>
        <div>
          <span className="designation">{this.props.details.designation}</span>
        </div>
        <div>
          <span className="company-name">{this.props.details.company}</span>
        </div>
        <div className="content">
          <ul>
            <li>
              <img src={PhoneIconDark} alt="phone no" className="mr-2 icon" />
              {this.props.details.contact}, {this.props.details.alternateContact}
            </li>
            <li>
              <img src={EmailIconDark} alt="email" className="mr-2 icon" />
              {this.props.details.email}
            </li>
            <li>
              <img src={WebsiteIconDark} alt="website" className="mr-2 icon" />
              {this.props.details.website}
            </li>
            <li>
              <img src={AddressIconDark} alt="address" className="mr-2 icon" />
              {this.props.details.addressOffice}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
