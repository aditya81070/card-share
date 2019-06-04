import React from 'react';
import * as _ from 'lodash';
import { HashLink as Link } from 'react-router-hash-link';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/MenuSharp';
import AccountCircle from '@material-ui/icons/AccountCircle';

import SideDrawer from './SideDrawer';

const styles = {
  colorDefault: {
    backgroundColor: '#4f4f4f'
  },
  grow: {
    flexGrow: 1
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      isOpen: false
    };

    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
  }

  handleMenuClose() {
    this.setState({ anchorEl: null });
  }

  handleMenuOpen(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  closeDrawer(event) {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    this.setState({ isOpen: false });
  }

  openDrawer(event) {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    this.setState({ isOpen: true });
  }

  render() {
    const menuItems = [
      { name: 'Dashboard', path: '/dashboard' },
      { name: 'Edit Card', path: '/edit-card' },
      { name: 'Edit Profile', path: '/profile' },
      { name: 'Logout', path: '/' }
    ];
    const { classes } = this.props;
    const isMenuOpen = Boolean(this.state.anchorEl);
    const renderMenu = (
      <Menu
        anchorEl={this.state.anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        {_.map(menuItems, item => (
          <Link
            to={item.path}
            smooth
            style={{ color: 'black', textDecoration: 'none' }}
            key={item.name}
          >
            <MenuItem color="inherit" key={item.name}>
              <p>{item.name}</p>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    );

    return (
      <div className={classes.grow}>
        <AppBar
          className={classes.colorDefault}
          position="fixed"
          id="appHeader"
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.openDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              CARD SHARE
            </Typography>
            <div className={classes.grow} />
            <div>
              <div className="d-inline-block user-icon">
                <Typography variant="h6" className="d-inline">
                  username
                </Typography>
                <IconButton color="inherit">
                  <AccountCircle fontSize="large" />
                </IconButton>
              </div>

              <IconButton
                aria-haspopup="true"
                onClick={this.handleMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        <SideDrawer
          handleOpen={this.openDrawer}
          handleClose={this.closeDrawer}
          isOpen={this.state.isOpen}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Header);
