import React from 'react';

// Material UI
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import InputDialog from '../components/widgets/InputDialog';
import Card from '../components/widgets/Cards';
import AppWrapper from '../components/wrapper/AppWrapper';

class Dashboard extends React.Component {
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
    return (
      <AppWrapper>
        <Paper className=" mx-auto my-3 pb-5" id="dashboard">
          <div className="bg-primary row mx-0 py-2">
            <Paper className=" row col-10 col-md-8 col-lg-6 mx-auto px-0">
              <InputBase
                className="bg-light col-10 col-md-11"
                placeholder="Name / Email / Username"
              />
              <button
                className="btn btn-warning col-2 col-md-1"
                aria-label="Search"
                secondary
              >
                <SearchIcon className="mx-auto" />
              </button>
            </Paper>
          </div>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="mx-5 mt-5">
              <Card variant="card1" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card2" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card3" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card4" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card5" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card1" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card2" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card3" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card4" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card5" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card1" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card2" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card3" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card4" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card5" />
            </div>
            <div className="mx-5 mt-5">
              <Card variant="card5" />
            </div>
          </div>
          <Fab color="primary" aria-label="Add" className="add-btn" onClick={this.handleClickOpen}>
            <AddIcon />
          </Fab>
        </Paper>
        <InputDialog
          open={this.state.open}
          handleClose={this.handleClose}
          title="Add Card"
          input={{
            id: 'email-username',
            label: 'Email/Username',
            type: 'text'
          }}
          buttonLabel="Submit"
        />
      </AppWrapper>
    );
  }
}

export default Dashboard;
