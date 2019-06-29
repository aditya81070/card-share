import React from 'react';
import * as _ from 'lodash';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// Material UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

// File Imports
import AppWrapper from '../../components/wrapper/AppWrapper';
import CardTemplates from '../../components/widgets/CardTemplates';

import { URL } from '../../config';

export class SelectCardWizard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      variant: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, variant) {
    event.preventDefault();
    axios({
      method: 'patch',
      url: `${URL}/users/${this.props.match.params.userId}`,
      data: { variant },
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      config: { headers: { 'Content-Type': 'application/json' } }
    })
      .then(res => res.data)
      .then(val => {
        if (val.variant === variant) {
          this.setState({
            redirect: true,
            redirectRoute: `/edit-card/${this.props.match.params.userId}`
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    const cardTypes = ['card1', 'card2', 'card3', 'card4', 'card5'];

    if (!this.state.redirect) {
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
              {_.map(cardTypes, type => (
                <div
                  className="mx-5 mt-5"
                  key={type}
                  onClick={e => this.handleSubmit(e, type)}
                >
                  <CardTemplates variant={type} />
                </div>
              ))}
            </div>
          </Paper>
        </AppWrapper>
      );
    } else {
      return <Redirect push to={this.state.redirectRoute} />;
    }
  }
}
