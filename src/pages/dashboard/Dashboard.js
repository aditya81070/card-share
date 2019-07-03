import React from 'react';
import axios from 'axios';
import * as _ from 'lodash';

// Material UI
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import InputDialog from './components/InputDialog';
import Card from '../../components/widgets/Cards';
import AppWrapper from '../../components/wrapper/AppWrapper';

import { URL } from '../../config';
export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      search: ''
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  async componentDidMount() {
    await axios({
      method: 'get',
      url: `${URL}/users/${this.props.match.params.userId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.data)
      .then(async val => {
        await this.setState(_.pick(val, ['incomingConnections']));
        this.setState({ filteredResult: this.state.incomingConnections });
      })
      .catch(err => console.log(err));
  }

  async handleSearch(event) {
    await this.setState({ search: event.target.value });
    if (this.state.search !== '') {
      const cards = _.filter(this.state.incomingConnections, card =>
        _.startsWith(card.name, this.state.search) ? true : false
      );
      this.setState({ incomingConnections: cards });
    } else {
      this.setState({ incomingConnections: this.state.filteredResult });
    }
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
        <div
          className="bg-primary search-bar py-2 mt-1 position-fixed w-100"
          style={{ zIndex: 1300 }}
        >
          <Paper className=" row col-10 col-md-8 col-lg-6 mx-auto px-0">
            <InputBase
              className="bg-light col-10 col-md-11"
              placeholder="Name"
              autoFocus={true}
              value={this.state.search}
              onChange={this.handleSearch}
            />
            <button
              className="btn btn-warning col-2 col-md-1"
              aria-label="Search"
            >
              <SearchIcon className="mx-auto" />
            </button>
          </Paper>
        </div>
        <Paper className="mx-auto mt-5 pb-5" id="dashboard">
          <div className="d-flex flex-wrap justify-content-center">
            {this.state.incomingConnections ? (
              _.map(this.state.incomingConnections, card => (
                <div className="mx-5 mt-5" key={card.email}>
                  <Card variant={card.variant} details={card} />
                </div>
              ))
            ) : (
              <div />
            )}
          </div>
          <Fab
            color="primary"
            aria-label="Add"
            className="add-btn"
            onClick={this.handleClickOpen}
          >
            <AddIcon />
          </Fab>
        </Paper>
        <InputDialog
          open={this.state.open}
          handleClose={this.handleClose}
          userId={this.props.match.params.userId}
        />
      </AppWrapper>
    );
  }
}
