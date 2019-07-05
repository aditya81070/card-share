import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as _ from 'lodash';
import { Redirect } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

// Material UI Components
import Typography from '@material-ui/core/Typography';

import { SecondaryTextField as InputField } from '../../../components/widgets/InputField';
import { SecondaryButton as Button } from '../../../components/widgets/Button';
import InputDialog from './InputDialog';
import LoginImg from '../../../assets/img/backgrounds/login.png';
import GoogleIcon from '../../../assets/img/icons/google.png';
import FacebookIcon from '../../../assets/img/icons/fb.png';

import { URL } from '../../../config';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      redirect: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleFacebookSignup = this.handleFacebookSignup.bind(this);
    this.handleGoogleSignup = this.handleGoogleSignup.bind(this);
  }

  async handleChange(event) {
    event.preventDefault();
    await this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: `${URL}/auth/login`,
      data: _.pick(this.state, 'email', 'password'),
      config: { headers: { 'Content-Type': 'application/json' } }
    })
      .then(res => res.data.data)
      .then(val => {
        localStorage.setItem('token', val.token.accessToken);
        localStorage.setItem('userId', val.user.id);
        this.setState({
          redirect: true,
          redirectPath: `/dashboard/${val.user.id}`
        });
      })
      .catch(err => console.log(err));
  }

  handleClickOpen() {
    this.state.open
      ? this.setState({ open: false })
      : this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }

  handleGoogleSignup(res) {
    axios({
      method: 'post',
      url: `${URL}/auth/google`,
      data: { access_token: res.accessToken },
      config: { headers: { 'Content-Type': 'application/json' } }
    })
      .then(res => res.data)
      .then(val => {
        localStorage.setItem('token', val.token.accessToken);
        localStorage.setItem('userId', val.user.id);
        this.setState({
          redirect: true,
          redirectPath: `/dashboard/${val.user.id}`
        });
      })
      .catch(err => console.log(err));
  }

  handleFacebookSignup(res) {
    axios({
      method: 'post',
      url: `${URL}/auth/facebook`,
      data: { access_token: res.accessToken },
      config: { headers: { 'Content-Type': 'application/json' } }
    })
      .then(res => res.data)
      .then(val => {
        localStorage.setItem('token', val.token.accessToken);
        localStorage.setItem('userId', val.user.id);
        this.setState({
          redirect: true,
          redirectPath: `/dashboard/${val.user.id}`
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    if (!this.state.redirect) {
      return (
        <div className="container-fluid text-center h-100" id="login">
          <div className="row">
            <div className="col-lg-5 col-md-12 form w-100 text-center">
              <Typography
                variant="h4"
                fontFamily="Roboto"
                className="text-light my-3"
              >
                Login
              </Typography>
              <form
                className="w-75 justify-content-center mx-auto"
                onSubmit={this.handleSubmit}
              >
                <InputField
                  name="email"
                  label="Email"
                  placeholder="Email"
                  className="w-100 my-3"
                  margin="normal"
                  type="email"
                  onChange={this.handleChange}
                  required={true}
                  autoComplete="on"
                  autoFocus={true}
                />
                <InputField
                  name="password"
                  label="Password"
                  placeholder="Password"
                  className="w-100 my-3"
                  margin="normal"
                  type="password"
                  onChange={this.handleChange}
                  required={true}
                  autoComplete="on"
                />
                <div className="w-100 btn-cont my-3">
                  <Button className="float-left p-2" type="submit">
                    Login
                  </Button>
                  <Link to="/signup">
                    <Button className="float-right p-2">Sign Up</Button>
                  </Link>
                </div>
                <Typography
                  variant="subtitle1"
                  className="text-left text-light my-2"
                  onClick={this.handleClickOpen}
                  style={{ cursor: 'pointer' }}
                >
                  Forgot Password?
                </Typography>
                <div className="row justify-content-center my-4">
                  <GoogleLogin
                    clientId="447127459950-t6p0gajeepoqdg88l20nqpbmalpnkca8.apps.googleusercontent.com"
                    onSuccess={this.handleGoogleSignup}
                    render={renderProps => (
                      <Button
                        className="float-left p-2 social-btn"
                        onClick={renderProps.onClick}
                      >
                        <img
                          src={GoogleIcon}
                          alt="google icon"
                          className="mr-2"
                        />
                        Login with Google
                      </Button>
                    )}
                  />{' '}
                </div>
                <div className="row justify-content-center my-4">
                  <FacebookLogin
                    appId="906865123023704"
                    textButton={
                      <Button className="float-left p-2 social-btn">
                        <img
                          src={FacebookIcon}
                          alt="facebook icon"
                          className="mr-2"
                        />
                        Sign Up with Facebook
                      </Button>
                    }
                    cssClass="m-0 p-0"
                    callback={this.handleFacebookSignup}
                  />
                </div>
              </form>
            </div>
            <div className="col-lg-7 col-md-0  w-100 login-img-cont">
              <img
                src={LoginImg}
                className="img-fluid login-img"
                alt="login creative"
              />
            </div>
          </div>
          <InputDialog open={this.state.open} handleClose={this.handleClose} />
        </div>
      );
    } else {
      return <Redirect push to={this.state.redirectPath} />;
    }
  }
}

export default LoginPage;
