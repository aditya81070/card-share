import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';

// File imports
import Men from '../../../assets/img/backgrounds/men-img.png';

export class Banner extends React.Component {
  render() {
    return (
      <div className="container-fluid banner">
        <div className="row h-100">
          <div className="col-xl-3">
            <img
              src={Men}
              className="img-fluid men-img"
              alt="men holding card"
            />
          </div>
          <div className="col-xl-9 col-lg-12 text-center">
            <Typography className="banner-title my-5" variant="h1">
              CARD SHARE
            </Typography>
            <Link to="/login">
              <button type="button" className="create-card-btn px-4 py-2 my-3">
                CREATE YOUR CARD
              </button>
            </Link>
            <Typography className="my-3 banner-tag-line" variant="h3">
              Transforming the business card sharing process
            </Typography>
          </div>
        </div>
      </div>
    );
  }
}
