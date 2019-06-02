import React from 'react';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const CssTextField = {
  secondary: {
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
  },
  tertiary: {
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
    },
  }
};

class InputField extends React.Component {
  render() {
    const { classes } = this.props;
    let property = this.props.primary
      ? ''
      : this.props.secondary
      ? classes.secondary
      : this.props.tertiary
      ? classes.tertiary
      : '';

    return (
      <TextField
        {...this.props}
        className={`${this.props.className} ${property}`}
      />
    );
  }
}

export default withStyles(CssTextField)(InputField);
