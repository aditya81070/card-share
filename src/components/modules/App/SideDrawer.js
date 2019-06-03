import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

// File Imports
import InputDialog from '../../widgets/InputDialog';
import Avtar from '../../../assets/img/avtar/amrit.jpeg';
import QR from '../../../assets/img/qr.png';
import Button from '../../widgets/Button';

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

  handleClickOpen() {
    this.state.open
      ? this.setState({ open: false })
      : this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;
    const sideList = (
      <div
        className="side-drawer text-center justify-content-center"
        role="presentation"
        onClick={this.props.handleClose}
        onKeyDown={this.props.handleClose}
      >
        <img src={Avtar} alt="avtar" className="avtar my-4" />
        <Typography variant="h5">Full Name</Typography>
        <Typography variant="h6" className="mb-2">
          sample@email.com
        </Typography>
        <Divider />
        <img src={QR} alt="QR code" className="col-8" />
        <Divider />
        <Button className="mt-5 mb-2 col-8" onClick={this.handleClickOpen}>
          Share Your Card
        </Button>
        <Link to="/create-card">
          <Button className=" mt-2 mb-3 col-8">Edit Your Card</Button>
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
        <InputDialog
          open={this.state.open}
          handleClose={this.handleClose}
          title="Share Card"
          input={{
            id: 'email-username',
            label: 'Email/Username',
            type: 'text'
          }}
          buttonLabel="Submit"
        />
      </div>
    );
  }
}

export default withStyles(styles)(SideDrawer);
