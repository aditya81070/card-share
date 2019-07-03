import React from 'react';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

function BaseTextField(props) {
  const { classes } = props;
  return (
    <TextField {...props} className={`${props.className} ${classes.root}`} />
  );
}

export const PrimaryTextField = (props) => {
  return <TextField {...this.props} />;
}

export const SecondaryTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white'
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
      borderBottomWidth: '3px'
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
      borderBottomWidth: '3px'
    },
    '&:hover .MuiInput-underline:before': {
      borderBottomColor: '#ffc107',
      borderBottomWidth: '3px'
    },
    '& .MuiInputBase-input': {
      color: 'white'
    },
    '& .MuiFormLabel-root': {
      color: 'white'
    },
    '&:hover .MuiFormLabel-root': {
      color: '#ffc107'
    }
  }
})(BaseTextField);

export const TertiaryTextField = withStyles({
  root: {
    '& .MuiInput-underline:after': {
      borderBottomColor: '#009688',
      borderBottomWidth: '3px'
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: '#009688',
      borderBottomWidth: '3px'
    },
    '& label.Mui-focused': {
      color: 'black'
    }
  }
})(BaseTextField);
