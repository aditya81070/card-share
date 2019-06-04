import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AppWrapper from '../../components/wrapper/AppWrapper';
import InputField from '../../components/widgets/InputField';
import Button from '../../components/widgets/Button';
import AvtarInput from '../../components/widgets/AvtarInput';

export class Profile extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Paper
          className="col-11 col-lg-6 col-md-8 col-xl-4 mt-5 mx-auto text-center justify-content-center"
          id="create-card"
        >
          <Typography
            variant="h4"
            fontFamily="Roboto"
            className="py-3 app-heading"
          >
            Edit Profile
          </Typography>
          <form className="w-75 mx-auto">
            <AvtarInput />
            <InputField
              id="name"
              label="Name"
              placeholder="Name"
              className="w-100 my-2"
              margin="normal"
              type="text"
              tertiary
            />
            <InputField
              id="email"
              label="Email"
              placeholder="Email"
              className="w-100 my-2"
              margin="normal"
              type="email"
              tertiary
            />
            <InputField
              id="contact"
              label="Contact No."
              placeholder="Contact No."
              className="w-100 my-2"
              margin="normal"
              type="tel"
              tertiary
            />
            <InputField
              id="username"
              label="Username"
              placeholder="Username"
              className="w-100 my-2"
              margin="normal"
              type="text"
              tertiary
            />
            <Link to="/dashboard">
              <Button className="my-4" type="submit">
                Save Profile
              </Button>
            </Link>
          </form>
        </Paper>
      </AppWrapper>
    );
  }
}
