import React from 'react';

import MUIButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const CssButton = {
  primary: {
    background: '#2F80ED',
    boxShadow:
      '0px 8px 8px rgba(0, 0, 0, 0.24), 0px 0px 8px rgba(0, 0, 0, 0.12)',
    borderRadius: '2px'
  },
  secondary: {
    background: '#FFFFFF',
    boxShadow:
      '0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '2px',
    color: '#2F80ED',
    fontWeight: 'bold',
    '&:hover': {
      background: '#FFFFFF',
      color: '#4F4F4F',
      boder: 'solid 2px #4F4F4F'
    }
  }
};

class Button extends React.Component {
  render() {
    const { classes } = this.props;
    const property = this.props.primary
      ? classes.primary
      : this.props.secondary
      ? classes.secondary
      : classes.primary;

    return (
      <MUIButton
        variant="contained"
        color="primary"
        {...this.props}
        className={`${this.props.className} ${property}`}
      >
        {this.props.children}
      </MUIButton>
    );
  }
}

export default withStyles(CssButton)(Button);
