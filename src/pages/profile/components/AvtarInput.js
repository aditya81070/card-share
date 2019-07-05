import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/EditOutlined';

class AvtarInput extends React.Component {
  render() {
    return (
      <div className="avtar-img-cont">
        <img
          src={this.props.picture}
          alt="default avtar"
          className="rounded-circle avtar-img"
        />
        <div className="icon-overlay">
          <input
            accept="image/*"
            className="d-none"
            id="icon-button-file"
            type="file"
            onChange={e => this.props.handelFileSelect(e.target.files)}
          />
          <label htmlFor="icon-button-file" className="icon">
            <IconButton color="primary" component="span">
              <EditIcon className="text-light" />
            </IconButton>
          </label>
        </div>
      </div>
    );
  }
}

export default AvtarInput;
