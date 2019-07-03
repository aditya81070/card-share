import React from 'react';

import MUIButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

function Button(props) {
  const { classes } = props;
  return (
    <MUIButton
      variant="contained"
      color="primary"
      {...props}
      className={`${props.className} ${classes.root}`}
    >
      {props.children}
    </MUIButton>
  );
}

export const PrimaryButton = withStyles({
  root: {
    background: '#2F80ED',
    boxShadow:
      '0px 8px 8px rgba(0, 0, 0, 0.24), 0px 0px 8px rgba(0, 0, 0, 0.12)',
    borderRadius: '2px'
  }
})(Button);

export const SecondaryButton = withStyles({
  root: {
    background: '#FFFFFF',
    boxShadow:
      '0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '2px',
    color: '#2F80ED',
    fontWeight: 'bold',
    '&:hover': {
      background: '#FFFFFF',
      color: '#4F4F4F'
    }
  }
})(Button);
