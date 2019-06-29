import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import * as _ from 'lodash';

// Material UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AppWrapper from '../../components/wrapper/AppWrapper';
import InputField from '../../components/widgets/InputField';
import Button from '../../components/widgets/Button';

import { URL } from '../../config';

export class EditCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
      fields: [
        'name',
        'email',
        'username',
        'contact',
        'alternateContact',
        'variant',
        'picture',
        'addressOffice',
        'addressHome',
        'company',
        'designation',
        'website'
      ]
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
        this.setState(_.pick(val, this.state.fields));
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
      data: { ..._.pick(this.state, this.state.fields) },
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
            <form className="w-75 mx-auto">
              <InputField
                name="name"
                label="Name"
                placeholder="Name"
                className="w-100 my-2"
                margin="normal"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                tertiary
                required
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
                tertiary
                required
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
                tertiary
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
                tertiary
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
                tertiary
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
                tertiary
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
                tertiary
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
                tertiary
                required
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
                tertiary
              />
              <Button
                className="my-4"
                type="submit"
                onClick={this.handleSubmit}
              >
                Save Details
              </Button>
            </form>
          </Paper>
        </AppWrapper>
      );
    } else {
      return <Redirect push to={this.state.redirectRoute} />;
    }
  }
}
