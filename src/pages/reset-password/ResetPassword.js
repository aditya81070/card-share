import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Material UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AppWrapper from '../../components/wrapper/AppWrapper';
import { TertiaryTextField as InputField } from '../../components/widgets/InputField';
import { PrimaryButton as Button } from '../../components/widgets/Button';

import { URL } from '../../config';

export class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async handleChange(event) {
    event.preventDefault();
    await this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      window.alert('Password does not match');
    } else {
      axios({
        method: 'post',
        url: `${URL}/auth/reset-password`,
        data: {
          id: this.props.match.params.userId,
          oldPassword: this.state.oldPassword,
          password: this.state.password
        },
        config: { headers: { 'Content-Type': 'application/json' } }
      })
        .then(res => res)
        .then(val => {
          this.setState({ redirect: true });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    if (!this.state.redirect) {
      return (
        <AppWrapper>
          <Paper
            className="col-11 col-lg-6 col-md-8 col-xl-4 mt-4 mx-auto text-center justify-content-center"
            id="create-card"
          >
            <Typography
              variant="h4"
              fontFamily="Roboto"
              className="py-3 app-heading"
            >
              Reset Password
            </Typography>
            <form className="w-75 mx-auto" onSubmit={this.handleSubmit}>
              <InputField
                name="oldPassword"
                label="Old Password"
                placeholder="Old Password"
                className="w-100 my-2"
                margin="normal"
                type="password"
                value={this.state.name}
                onChange={this.handleChange}
                required={true}
                autoComplete="on"
                autoFocus={true}
              />
              <InputField
                name="password"
                label="New Password"
                placeholder="New Password"
                className="w-100 my-2"
                margin="normal"
                type="password"
                value={this.state.contact}
                onChange={this.handleChange}
                required={true}
                autoComplete="on"
              />
              <InputField
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm Password"
                className="w-100 my-2"
                margin="normal"
                type="password"
                value={this.state.contact}
                onChange={this.handleChange}
                required={true}
                autoComplete="on"
              />
              <Button className="my-4" type="submit">
                Change Password
              </Button>
            </form>
          </Paper>
        </AppWrapper>
      );
    } else {
      return (
        <Redirect push to={`/dashboard/${this.props.match.params.userId}`} />
      );
    }
  }
}
