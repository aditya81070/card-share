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
          <span className="name">Full Name</span>
        </div>
        <div>
          <span className="designation">Designation</span>
        </div>
        <div>
          <span className="company-name">Company Name</span>
        </div>
        <div className="content">
          <ul>
            <li>
              Phone No., Alternate no.
              <img src={PhoneIconLight} alt="phone no" className="ml-2 icon" />
            </li>
            <li>
              sample@email.com
              <img src={EmailIconLight} alt="email" className="ml-2 icon" />
            </li>
            <li>
              www.website.com
              <img src={WebsiteIconLight} alt="website" className="ml-2 icon" />
            </li>
            <li>
              street, city, state, country, pincode
              <img src={AddressIconLight} alt="address" className="ml-2 icon" />
            </li>
            <li>
              street, city, state, country, pincode
              <img src={AddressIconLight} alt="address" className="ml-2 icon" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
