import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Paper from '@material-ui/core/Paper';

import AppWrapper from '../components/wrapper/AppWrapper';
import '../assets/styles/App.scss';

// Material UI
import Typography from '@material-ui/core/Typography';
import Card from '../components/widgets/Cards';

class SelectCardWizard extends React.Component {
  render() {
    return (
      <AppWrapper>
        <Paper
          className="col-11 col-md-10 mt-5 p-5 mx-auto text-center justify-content-center"
          id="create-card"
        >
          <Typography
            variant="h4"
            fontFamily="Roboto"
            className="py-3 app-heading"
          >
            Select Your Card
          </Typography>
          <div className="d-flex flex-wrap justify-content-center">
            <Link to="/create-card">
              <div className="mx-5 mt-5">
                <Card variant="card1" />
              </div>
            </Link>
            <Link to="/create-card">
              <div className="mx-5 mt-5">
                <Card variant="card2" />
              </div>
            </Link>
            <Link to="/create-card">
              <div className="mx-5 mt-5">
                <Card variant="card3" />
              </div>
            </Link>
            <Link to="/create-card">
              <div className="mx-5 mt-5">
                <Card variant="card4" />
              </div>
            </Link>
            <Link to="/create-card">
              <div className="mx-5 mt-5">
                <Card variant="card5" />
              </div>
            </Link>
          </div>
        </Paper>
      </AppWrapper>
    );
  }
}

export default SelectCardWizard;
