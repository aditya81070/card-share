import React from 'react';
import axios from 'axios';

import MuiDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';
import { TertiaryTextField as InputField } from '../../../components/widgets/InputField';
import { PrimaryButton } from '../../../components/widgets/Button';

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
      [event.currentTarget.name]: event.currentTarget.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios({
      method: 'post',
      url: `${URL}/users/card/${this.props.userId}`,
      data: { username: this.state.username },
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      config: { headers: { 'Content-Type': 'application/json' } }
    })
      .then(res => res.data)
      .then(val => {
        if (val) {
          window.location.reload();
        }
      })
      .catch(err => console.log(err));
    this.props.handleClose();
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Card</DialogTitle>
        <form>
        <DialogContent>
          <InputField
            autoFocus={true}
            margin="dense"
            name="username"
            label="Username"
            type="text"
            onChange={this.handleChange}
            fullWidth
            required={true}
          />
        </DialogContent>
        <DialogActions>
          <PrimaryButton onClick={this.handleSubmit} color="primary">
            Submit
          </PrimaryButton>
          <PrimaryButton onClick={this.props.handleClose} color="primary">
            Close
          </PrimaryButton>
        </DialogActions>
        </form>
      </Dialog>
    );
  }
}

export default InputDialog;
