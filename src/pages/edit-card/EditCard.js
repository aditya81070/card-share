import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import AppWrapper from '../../components/wrapper/AppWrapper';
import InputField from '../../components/widgets/InputField';
import Button from '../../components/widgets/Button';

export class EditCard extends React.Component {
  render() {
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
              id="name"
              label="Name"
              placeholder="Name"
              className="w-100 my-2"
              margin="normal"
              type="text"
              tertiary
              required
            />
            <InputField
              id="email"
              label="Email"
              placeholder="Email"
              className="w-100 my-2"
              margin="normal"
              type="email"
              tertiary
              required
            />
            <InputField
              id="contact"
              label="Contact No."
              placeholder="Contact No."
              className="w-100 my-2"
              margin="normal"
              type="tel"
              tertiary
              required
            />
            <InputField
              id="alt-contact"
              label="Alternate Contact No."
              placeholder="Alternate Contact No."
              className="w-100 my-2"
              margin="normal"
              type="tel"
              tertiary
            />
            <InputField
              id="address-office"
              label="Address (Office)"
              placeholder="Address (Office)"
              className="w-100 my-2"
              margin="normal"
              type="text"
              tertiary
            />
            <InputField
              id="address-home"
              label="Address (Home)"
              placeholder="Address (Home)"
              className="w-100 my-2"
              margin="normal"
              type="text"
              tertiary
            />
            <InputField
              id="company"
              label="Company Name"
              placeholder="Company Name"
              className="w-100 my-2"
              margin="normal"
              type="text"
              tertiary
              required
            />
            <InputField
              id="designation"
              label="Designation"
              placeholder="Designation"
              className="w-100 my-2"
              margin="normal"
              type="text"
              tertiary
              required
            />
            <InputField
              id="website"
              label="Website"
              placeholder="Website"
              className="w-100 my-2"
              margin="normal"
              type="url"
              tertiary
            />
            <Link to="/dashboard">
              <Button className="my-4" type="submit">
                Save Details
              </Button>
            </Link>
          </form>
        </Paper>
      </AppWrapper>
    );
  }
}
