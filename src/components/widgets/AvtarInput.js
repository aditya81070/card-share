import React from 'react';

// Material UI
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/EditOutlined';

import Avtar from '../../assets/img/avtar/amrit.jpeg';

class AvtarInput extends React.Component {
  render() {
    return (
      <div className="avtar-img-cont">
        <img
          src={Avtar}
          alt="default avtar"
          className="rounded-circle avtar-img"
        />
        <div className="icon-overlay">
          <input
            accept="image/*"
            className="d-none"
            id="icon-button-file"
            type="file"
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
