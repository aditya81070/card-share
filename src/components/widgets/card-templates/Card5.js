import React from 'react';

import PhoneIconLight from '../../../assets/img/icons/card-light/phone.png';
import AddressIconLight from '../../../assets/img/icons/card-light/address.png';
import EmailIconLight from '../../../assets/img/icons/card-light/email.png';
import WebsiteIconLight from '../../../assets/img/icons/card-light/website.png';

export class Card5 extends React.Component {
  render() {
    return (
      <div className="card card5 mx-auto text-light">
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
              {this.props.details.contact},{' '}
              {this.props.details.alternateContact}
              <img src={PhoneIconLight} alt="phone no" className="ml-2 icon" />
            </li>
            <li>
              {this.props.details.email}
              <img src={EmailIconLight} alt="email" className="ml-2 icon" />
            </li>
            <li>
              {this.props.details.website}
              <img src={WebsiteIconLight} alt="website" className="ml-2 icon" />
            </li>
            <li>
              {this.props.details.addressOffice}
              <img src={AddressIconLight} alt="address" className="ml-2 icon" />
            </li>
            <li>
              {this.props.details.addressHome}
              <img src={AddressIconLight} alt="address" className="ml-2 icon" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
