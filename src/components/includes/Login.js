import React from 'react';
import { Link } from 'react-router-dom';

// Material UI Components
import Typography from '@material-ui/core/Typography';
import InputField from '../widgets/InputField';
import Button from '../widgets/Button';
import MuiDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';

// File Imports
import LoginImg from '../../assets/img/backgrounds/login.png';
import GoogleIcon from '../../assets/img/icons/google.png';
import FacebookIcon from '../../assets/img/icons/fb.png';

const Dialog = withStyles(theme => ({
  root: {
    '& .MuiDialog-paper': {
      width: '500px',
      padding: '10px'
    }
  }
}))(MuiDialog);

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

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
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText> */}
          <InputField
            autoFocus
            margin="dense"
            id="email-username"
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
            <form className="w-75 justify-content-center mx-auto">
              <InputField
                id="email"
                label="Email"
                placeholder="Email"
                className="w-100 my-3"
                margin="normal"
                type="email"
                secondary
              />
              <InputField
                id="password"
                label="Password"
                placeholder="Password"
                className="w-100 my-3"
                margin="normal"
                type="password"
                secondary
              />
              <div className="w-100 btn-cont my-3">
                <Button secondary className="float-left p-2">
                  Login
                </Button>
                <Link to="/signup">
                  <Button secondary className="float-right p-2">
                    Sign Up
                  </Button>
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
                <Button secondary className="float-left p-2 social-btn">
                  <img src={GoogleIcon} alt="google icon" className="mr-2" />
                  Login with Google
                </Button>
              </div>
              <div className="row justify-content-center my-4">
                <Button secondary className="float-left p-2 social-btn">
                  <img
                    src={FacebookIcon}
                    alt="facebook icon"
                    className="mr-2"
                  />
                  Login with Facebook
                </Button>
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
        {ForgotPasswordDialog}
      </div>
    );
  }
}

export default Login;