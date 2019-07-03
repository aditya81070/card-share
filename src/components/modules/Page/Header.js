import React from 'react';
import * as _ from 'lodash';
import { HashLink as Link } from 'react-router-hash-link';

// Material UI
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  colorDefault: {
    backgroundColor: '#4f4f4f'
  },
  grow: {
    flexGrow: 1
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

function Header() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const menuItems = [
    { name: 'Home', path: '/#home' },
    { name: 'About', path: '/#about' },
    { name: 'Features', path: '/#features' },
    { name: 'Sign Up', path: '/signup' },
    { name: 'Login', path: '/login' }
  ];

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {_.map(menuItems, item => (
        <Link
          to={item.path}
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
      <AppBar className={classes.colorDefault} position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            CARD SHARE
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {_.map(menuItems, item => (
              <Link
                to={item.path}
                style={{ color: 'white', textDecoration: 'none' }}
                key={item.name}
              >
                <Button color="inherit" className="mx-1">
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}

export default Header;
