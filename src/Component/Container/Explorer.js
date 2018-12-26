import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import axios from 'axios';
import host from '../../Host';
import Posts from './Post/Posts';
import Grid from '@material-ui/core/Grid';
import Navibar from '../Navibar';
import Suggest from './Suggest'

class Explorer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      axios.get(host + '/newfeeds/' + this.props.profileData.info.public_key)
        .then(res => {
          this.setState({
            data: res.data
          });
        })
    }, 3000);
  }
  
  componentWillUnmount = () => {
    clearInterval(this.interval);
    this.setState = {
      data: {}
    }
  }

  render() {
    if (!this.props.profileData) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <Navibar />
        <Grid style={{marginTop: "90px"}} container spacing={32}>
          <Grid item xs={1} />
          <Grid item xs={7}>
            {this.state.data && <Posts data={this.state.data} />}
          </Grid>
          <Grid item xs={3}>
            <Suggest />
          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileData: state.myProfile.profileData
  }
}

export default withRouter(connect(mapStateToProps, null)(Explorer));