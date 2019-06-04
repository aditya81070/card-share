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
              <img src={PhoneIconDark} alt="phone no" className="mr-2 icon" />
              Phone No., Alternate no.
            </li>
            <li>
              <img src={EmailIconDark} alt="email" className="mr-2 icon" />
              sample@email.com
            </li>
            <li>
              <img src={WebsiteIconDark} alt="website" className="mr-2 icon" />
              www.website.com
            </li>
            <li>
              <img src={AddressIconDark} alt="address" className="mr-2 icon" />
              street, city, state, country, pincode
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
