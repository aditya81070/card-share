import React from 'react';
import Paper from '@material-ui/core/Paper';
// import { styled } from '@material-ui/styles'
import mainstyled from 'styled-components'
import Typography from '@material-ui/core/Typography';

import './App.css';
import { withStyles } from '@material-ui/styles';

const useStyles = {
  root: {
    padding: '20px',
    margin: '20px',
    backgroundColor: 'blue'
  },
};

const MyBox = mainstyled.div`
  background-color: black;
  color: white; 
`

// const MyPaper = styled(Paper)({
//   backgroundColor: 'pink'
// }) 

class App extends React.Component {
  render() {
    return (
      <div className="App">   
      <MyBox>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </MyBox>
  </div>
    )
  }
}

export default withStyles(useStyles)(App);
