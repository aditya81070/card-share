import React from 'react';

// Material UI
import Paper from '@material-ui/core/Paper';
import { Row, Col } from 'reactstrap';

// File Imports
import Header from '../modules/Page/Header';

class PageWrapper extends React.Component {
  render() {
    const body = () => {
      let content = [];
      for (let i = 0; i < this.props.children.length; i++) {
        content.push(
          <div
            className={`container-fluid paper-cont 
                ${this.props.children[i].props.background}`}
            key={i}
          >
            <Row>
              <Col
                xs={12}
                md={10}
                className="container-fluid align-items-center"
              >
                <Paper className="paper">{this.props.children[i]}</Paper>
              </Col>
            </Row>
          </div>
        );
      }
      return content;
    };

    return (
      <div>
        <Header />
        {body()}
      </div>
    );
  }
}

export default PageWrapper;
