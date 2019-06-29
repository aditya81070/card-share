import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import * as _ from 'lodash';
import { Redirect } from 'react-router-dom';
import { URL } from '../../../config';

// Material UI Components
import Typography from '@material-ui/core/Typography';
import MuiDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import InputAdornment from '@material-ui/core/InputAdornment';
import TickIcon from '@material-ui/icons/DoneOutline';
import { withStyles } from '@material-ui/core/styles';

// File Imports
import InputField from '../../../components/widgets/InputField';
import Button from '../../../components/widgets/Button';
import SingUpImg from '../../../assets/img/backgrounds/signup.png';
import GoogleIcon from '../../../assets/img/icons/google.png';
import FacebookIcon from '../../../assets/img/icons/fb.png';

const Dialog = withStyles({
  root: {
    '& .MuiDialog-paper': {
      width: '500px',
      padding: '10px'
    }
  }
})(MuiDialog);

class SignUpPage extends React.Component {
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
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: `${URL}/auth/register`,
      data: _.pick(this.state, 'name', 'email', 'username', 'password'),
      config: { headers: { 'Content-Type': 'application/json' } }
    })
      .then(res => res.data.data)
      .then(val => {
        localStorage.setItem('token', val.token.accessToken);
        localStorage.setItem('userId', val.user.id);
        this.setState({ redirect: true, redirectPath: `/select-card/${val.user.id}` });
      })
      .catch(err => console.log(err));
  }

  // Dialog Box Handler Functions
  handleClickOpen() {
    this.state.open
      ? this.setState({ open: false })
      : this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const ForgotPasswordDialog = (
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Forgot Password</DialogTitle>
        <DialogContent>
          <InputField
            autoFocus
            margin="dense"
            name="email-username"
            label="Email/Username"
            type="text"
            fullWidth
            tertiary
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Submit
          </Button>
          <Button onClick={this.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );

    if (!this.state.redirect) {
      return (
        <div className="container-fluid text-center h-100" id="signup">
          <div className="row">
            <div className="col-lg-7 col-md-0  w-100 signup-img-cont">
              <img
                src={SingUpImg}
                className="img-fluid sign-up-img h-100"
                alt="sign up creative"
              />
            </div>
            <div className="col-lg-5 col-md-12 form w-100 text-center">
              <Typography
                variant="h4"
                fontFamily="Roboto"
                className="text-light my-3"
              >
                Sign Up
              </Typography>
              <form className="w-75 justify-content-center mx-auto">
                <InputField
                  name="name"
                  label="Name"
                  placeholder="Name"
                  className="w-100 my-3"
                  margin="normal"
                  type="text"
                  secondary
                  onChange={this.handleChange}
                />
                <InputField
                  name="email"
                  label="Email"
                  placeholder="Email"
                  className="w-100 my-3"
                  margin="normal"
                  type="email"
                  secondary
                  onChange={this.handleChange}
                />
                <InputField
                  name="username"
                  label="Username"
                  placeholder="Username"
                  className="w-100 my-3"
                  margin="normal"
                  type="text"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <TickIcon className="text-light" />
                      </InputAdornment>
                    )
                  }}
                  secondary
                  onChange={this.handleChange}
                />
                <InputField
                  name="password"
                  label="Password"
                  placeholder="Password"
                  className="w-100 my-3"
                  margin="normal"
                  type="password"
                  secondary
                  onChange={this.handleChange}
                />
                <div className="w-100 btn-cont my-3">
                  <Button
                    secondary
                    className="float-left p-2"
                    onClick={this.handleSubmit}
                  >
                    Sign Up
                  </Button>
                  <Link to="/login">
                    <Button secondary className="float-right p-2">
                      Login
                    </Button>
                  </Link>
                </div>
                <div className="row justify-content-center my-4">
                  <Link to="/select-card">
                    <Button secondary className="float-left p-2 social-btn">
                      <img
                        src={GoogleIcon}
                        alt="google icon"
                        className="mr-2"
                      />
                      Sign Up with Google
                    </Button>
                  </Link>
                </div>
                <div className="row justify-content-center my-4">
                  <Link to="/select-card">
                    <Button secondary className="float-left p-2 social-btn">
                      <img
                        src={FacebookIcon}
                        alt="facebook icon"
                        className="mr-2"
                      />
                      Sign Up with Facebook
                    </Button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
          {ForgotPasswordDialog}
        </div>
      );
    } else {
      return <Redirect push to={this.state.redirectPath} />;
    }
  }
}

export default SignUpPage;
