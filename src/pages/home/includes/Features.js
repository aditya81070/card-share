import React from 'react';

// Material UI Components
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

// File Imports
import Share from '../../../assets/img/icons/share.png';
import QRIcon from '../../../assets/img/icons/qr.png';
import CardIcon from '../../../assets/img/icons/card.png';

export class Features extends React.Component {
  render() {
    const featureCards = [
      {
        title: 'Quick Sharing',
        desc: 'Share you business card with your username',
        icon: Share
      },
      {
        title: 'Scan and Share',
        desc: 'Share you business card with just scanning QR',
        icon: QRIcon
      },
      {
        title: 'Creative Designs',
        desc: 'Access to select your design on your own',
        icon: CardIcon
      }
    ];
    return (
      <div className="container-fluid text-center features">
        <div className="h-25">
          <h1 className="features-title py-5">FEATURES</h1>
        </div>
        <div className="h-75 py-5 row d-flex flex-row justify-content-center flex-no-wrap">
          {featureCards.map(feature => (
            <div className="features-card-cont py-5" key={feature.title}>
              <Card className="w-75 mx-auto">
                <CardContent>
                  <img
                    src={feature.icon}
                    alt="feature.title"
                    className="my-3"
                  />
                  <Typography variant="h4">{feature.title}</Typography>
                  <Typography variant="h6">{feature.desc}</Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
