import React from 'react';

import { SecondaryButton as Button } from './Button';
import GoogleIcon from '../../assets/img/icons/google.png';
import FacebookIcon from '../../assets/img/icons/fb.png';

class SocialButton extends React.Component {
  render() {
    const googleButton = (
      <Button className="float-left p-2 social-btn">
        <img src={GoogleIcon} alt="google icon" className="mr-2" />
        Login with Google
      </Button>
    );
    const facebookButton = (
      <Button className="float-left p-2 social-btn">
        <img src={FacebookIcon} alt="facebook icon" className="mr-2" />
        Login with Facebook
      </Button>
    );
    switch (this.props.variant) {
      case 'google':
        return googleButton;
      case 'facebook':
        return facebookButton;
      default:
        return googleButton;
    }
  }
}

export default SocialButton;
