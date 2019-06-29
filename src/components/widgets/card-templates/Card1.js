import React from 'react';

import PhoneIconLight from '../../../assets/img/icons/card-light/phone.png';
import AddressIconLight from '../../../assets/img/icons/card-light/address.png';
import EmailIconLight from '../../../assets/img/icons/card-light/email.png';
import WebsiteIconLight from '../../../assets/img/icons/card-light/website.png';

export class Card1 extends React.Component {
  render() {
    return (
      <div className="card card1 mx-auto text-light">
        <div>
          <span className="company-name">{this.props.details.company}</span>
        </div>
        <div>
          <span className="name">{this.props.details.name}</span>
        </div>
        <div>
          <span className="designation">{this.props.details.designation}</span>
        </div>
        <div className="content">
          <ul>
            <li>
              <img src={PhoneIconLight} alt="phone no" className="mr-2 icon" />
              {this.props.details.contact}, {this.props.details.alternateContact}
            </li>
            <li>
              <img src={EmailIconLight} alt="email" className="mr-2 icon" />
              {this.props.details.email}
            </li>
            <li>
              <img src={WebsiteIconLight} alt="website" className="mr-2 icon" />
              {this.props.details.website}
            </li>
            <li>
              <img src={AddressIconLight} alt="address" className="mr-2 icon" />
              {this.props.details.addressOffice}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
