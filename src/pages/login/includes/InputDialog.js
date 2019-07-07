import React from 'react';
import axios from 'axios';

import MuiDialog from '@material-ui/core/Dialog';
import { TertiaryTextField as InputField } from '../../../components/widgets/InputField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';

import { PrimaryButton as Button } from '../../../components/widgets/Button';

import { URL } from '../../../config';

const Dialog = withStyles(theme => ({
  root: {
    '& .MuiDialog-paper': {
      width: '500px',
      padding: '10px'
    }
  }
}))(MuiDialog);

class InputDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChange(event) {
    event.preventDefault();
    await this.setState({
      email: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: `${URL}/auth/forgot-password`,
      data: { email: this.state.email },
      config: { headers: { 'Content-Type': 'application/json' } }
    })
      .then(res => res)
      .then(val => {
        this.props.handleClose();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Forgot Password</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Kindly check your mail for new temporary password.
          </DialogContentText>
          <InputField
            autoFocus={true}
            margin="dense"
            id="email"
            label="Email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            fullWidth
            requried={true}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} color="primary">
            Submit
          </Button>
          <Button onClick={this.props.handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default InputDialog;
