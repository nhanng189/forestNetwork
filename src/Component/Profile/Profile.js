import React, { Component } from 'react';
import Navibar from '../Navibar';
import Headers from './Header';
import Posts from './Post/Posts';

import Grid from '@material-ui/core/Grid';

class Profile extends Component {
  render() {
    return (
      <div>
        <Navibar />
        <Headers />
        <Grid container spacing={32}>
          <Grid item xs={1} />
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
            <Posts />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

export default Profile;