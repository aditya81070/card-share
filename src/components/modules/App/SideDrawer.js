import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

// File Imports
import InputDialog from './InputDialog';
import Avtar from '../../../assets/img/avtar/avtar.png';
import QR from '../../../assets/img/qr.png';
import { PrimaryButton } from '../../widgets/Button';
import {URL} from '../../../config';
import { transform } from '../../../utils/transform'; 

const styles = {
  list: {
    width: 300
  },
  fullList: {
    width: 'auto'
  }
};

class SideDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: `${URL}/users/${localStorage.getItem('userId')}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.data)
      .then(async val => {
        await this.setState(transform(val));
      })
      .catch(err => console.log(err));
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
    console.log(this.state.username)
    const sideList = (
      <div
        className="side-drawer text-center justify-content-center"
        role="presentation"
        onClick={this.props.handleClose}
        onKeyDown={this.props.handleClose}
      >
        <img src={this.state.picture==="" ? Avtar : this.state.picture} alt="avtar" className="avtar my-4" />
        <Typography variant="h5">{this.state.name}</Typography>
        <Typography variant="h6" className="mb-2">
          {`@${this.state.username}`}
        </Typography>
        <Divider />
        <img src={QR} alt="QR code" className="col-8" />
        <Divider />
        <PrimaryButton
          className="mt-5 mb-2 col-8"
          onClick={this.handleClickOpen}
        >
          Share Your Card
        </PrimaryButton>
        <Link to={`/select-card/${localStorage.getItem('userId')}`}>
          <PrimaryButton className=" mt-2 mb-3 col-8">
            Edit Your Card
          </PrimaryButton>
        </Link>
      </div>
    );

    return (
      <div>
        <SwipeableDrawer
          open={this.props.isOpen}
          onClose={this.props.handleClose}
          onOpen={this.props.handelOpen}
        >
          {sideList}
        </SwipeableDrawer>
        <InputDialog open={this.state.open} handleClose={this.handleClose} />
      </div>
    );
  }
}

export default withStyles(styles)(SideDrawer);
