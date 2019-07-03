import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Material UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AppWrapper from '../../components/wrapper/AppWrapper';
import { TertiaryTextField as InputField } from '../../components/widgets/InputField';
import { PrimaryButton } from '../../components/widgets/Button';

import { URL } from '../../config';
import { transform } from '../../utils/transform';

export class EditCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      name: '',
      email: '',
      username: '',
      contact: '',
      alternateContact: '',
      variant: '',
      picture: '',
      addressOffice: '',
      addressHome: '',
      company: '',
      designation: '',
      website: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `${URL}/users/${this.props.match.params.userId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.data)
      .then(val => {
        this.setState(transform(val));
      })
      .catch(err => console.log(err));
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
      method: 'patch',
      url: `${URL}/users/${this.props.match.params.userId}`,
      data: transform(this.state),
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      config: { headers: { 'Content-Type': 'application/json' } }
    })
      .then(res => res.data)
      .then(val => {
        if (val) {
          this.setState({
            redirect: true,
            redirectRoute: `/dashboard/${this.props.match.params.userId}`
          });
        }
      })
      .catch(err => console.log(err));
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
              Design Your Card
            </Typography>
            <form className="w-75 mx-auto" onSubmit={this.handleSubmit}>
              <InputField
                name="name"
                label="Name"
                placeholder="Name"
                className="w-100 my-2"
                margin="normal"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                required={true}
                autoComplete="on"
                autoFocus={true}
              />
              <InputField
                name="email"
                label="Email"
                placeholder="Email"
                className="w-100 my-2"
                margin="normal"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                required={true}
                autoComplete="on"
              />
              <InputField
                name="contact"
                label="Contact No."
                placeholder="Contact No."
                className="w-100 my-2"
                margin="normal"
                type="tel"
                value={this.state.contact}
                onChange={this.handleChange}
                autoComplete="on"
              />
              <InputField
                name="alternateContact"
                label="Alternate Contact No."
                placeholder="Alternate Contact No."
                className="w-100 my-2"
                margin="normal"
                type="tel"
                value={this.state.alternateContact}
                onChange={this.handleChange}
                autoComplete="on"
              />
              <InputField
                name="addressOffice"
                label="Address (Office)"
                placeholder="Address (Office)"
                className="w-100 my-2"
                margin="normal"
                type="text"
                value={this.state.addressOffice}
                onChange={this.handleChange}
                autoComplete="on"
              />
              <InputField
                name="addressHome"
                label="Address (Home)"
                placeholder="Address (Home)"
                className="w-100 my-2"
                margin="normal"
                type="text"
                value={this.state.addressHome}
                onChange={this.handleChange}
                autoComplete="on"
              />
              <InputField
                name="company"
                label="Company Name"
                placeholder="Company Name"
                className="w-100 my-2"
                margin="normal"
                type="text"
                value={this.state.company}
                onChange={this.handleChange}
                autoComplete="on"
              />
              <InputField
                name="designation"
                label="Designation"
                placeholder="Designation"
                className="w-100 my-2"
                margin="normal"
                type="text"
                value={this.state.designation}
                onChange={this.handleChange}
                autoComplete="on"
              />
              <InputField
                name="website"
                label="Website"
                placeholder="Website"
                className="w-100 my-2"
                margin="normal"
                type="url"
                value={this.state.website}
                onChange={this.handleChange}
              />
              <PrimaryButton className="my-4" type="submit">
                Save Details
              </PrimaryButton>
            </form>
          </Paper>
        </AppWrapper>
      );
    } else {
      return <Redirect push to={this.state.redirectRoute} />;
    }
  }
}
