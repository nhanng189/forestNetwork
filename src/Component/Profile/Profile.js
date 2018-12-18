import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileData } from '../../actions/profileAction';

import Navibar from '../Navibar';
import Headers from './Header';
import Posts from './Post/Posts';
import Information from './Infomation';

import Grid from '@material-ui/core/Grid';

class Profile extends Component {

  componentWillMount = async () => {
    await this.props.getProfileData(this.props.match.params.publicKey);
  }

  render() {
    return (
      <div>
        <Navibar />
        <Headers />
        <Grid container spacing={32}>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Information publicKey={this.props.match.params.publicKey} />
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

const mapDispatchToProps = dispatch => {
  return ({
    getProfileData: (publicKey) => dispatch(getProfileData(publicKey))
  })
}


export default connect(
  null,
  mapDispatchToProps
)(Profile)