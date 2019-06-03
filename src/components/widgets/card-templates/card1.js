import React from 'react';

import PhoneIconLight from '../../../assets/img/icons/card-light/phone.png';
import AddressIconLight from '../../../assets/img/icons/card-light/address.png';
import EmailIconLight from '../../../assets/img/icons/card-light/email.png';
import WebsiteIconLight from '../../../assets/img/icons/card-light/website.png';

class Card1 extends React.Component {
  render() {
    return (
      <div className="card card1 mx-auto text-light">
        <div>
          <span className="company-name">Company Name</span>
        </div>
        <div>
          <span className="name">Full Name</span>
        </div>
        <div>
          <span className="designation">Designation</span>
        </div>
        <div className="content">
          <ul>
            <li>
              <img src={PhoneIconLight} alt="phone no" className="mr-2 icon" />
              Phone No., Alternate no.
            </li>
            <li>
              <img src={EmailIconLight} alt="email" className="mr-2 icon" />
              sample@email.com
            </li>
            <li>
              <img src={WebsiteIconLight} alt="website" className="mr-2 icon" />
              www.website.com
            </li>
            <li>
              <img src={AddressIconLight} alt="address" className="mr-2 icon" />
              street, city, state, country, pincode
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Card1;
