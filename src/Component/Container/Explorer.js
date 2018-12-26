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
      accData: {}
    }
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      axios.get(host + '/account/GBL6LXYDY6L2NHYKE3GCFLFIWPWIIZJGGGW547URO7Z7ORHST6PYS7V3')
        .then(res => {
          this.setState({
            accData: res.data,
            isMe: this.props.profileData ? (this.props.match.params.publicKey === this.props.profileData.info.public_key) : false,
            isFollowed: this.props.profileData ? (this.props.profileData.info.follow ? 
                                                  this.props.profileData.info.follow.split(',').includes(this.props.match.params.publicKey) : false )
                                               : false
          });
        })
    }, 2000);
  }
  
  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render() {
    if (!this.props.profileData) {
      return <Redirect to="/login" />;
    }
    let element=null;
    if (this.state.accData.tx && this.state.accData.info) {
      element = <Posts posts={this.state.accData.tx.post} accInfo={this.state.accData.info} />
    }

    return (
      <div>
        <Navibar />
        <Grid style={{marginTop: "90px"}} container spacing={32}>
          <Grid item xs={1} />
          <Grid item xs={7}>
            {element}
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