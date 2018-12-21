import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProfileData } from '../../actions';
import axios from 'axios';
import host from '../../Host';

import Navibar from '../Navibar';
import Headers from './Header';
import Posts from './Post/Posts';
import Information from './Infomation';
import Exchanges from './Exchange/Exchanges';

import Grid from '@material-ui/core/Grid';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMe: true,
      screen: '0',
      accData: {}
    }
  }

  setScreen = (screen) => {
    this.setState({
      screen: screen
    })
  }

  componentWillMount = async () => {
    if(!this.props.profileData) {
      return <Redirect to="/login" />;
    }

    if(this.props.profileData.info.public_key === this.props.match.params.publicKey) {
      this.setState({
        accData: this.props.profileData,
        isMe: true
      });
    } else {
      let currentAcc = await axios.get(host + '/account/' + this.props.match.params.publicKey);
      this.setState({
        accData: currentAcc,
        isMe: false
      });
    }
  }

  componentWillReceiveProps = async (nextProp) => {
    if(this.props.match.params.publicKey !== nextProp.match.params.publicKey) {
      if(this.props.profileData.info.public_key === nextProp.match.params.publicKey) {
        this.setState({
          accData: this.props.profileData,
          isMe: true
        });
      } else {
        let currentAcc = await axios.get(host + '/account/' + nextProp.match.params.publicKey);
        this.setState({
          accData: currentAcc.data,
          isMe: false
        });
      }
    }
  }

  render() {
    if (!this.props.profileData) {
      return <Redirect to="/login" />;
    }

    let element = this.state.screen === '0' ? 
                    <Posts posts={this.state.accData.tx.post} accInfo={this.state.accData.info}/> : 
                    <Exchanges exchanges={Object.assign({}, this.state.accData.tx.send, this.state.accData.tx.receive)} />

    return (
      <div>
        <Navibar />
        <Headers setScreen={this.setScreen} accInfo={this.state.accData.info} isMe={this.state.isMe} />
        <Grid container spacing={32}>
          <Grid item xs={1} />
          <Grid item xs={3}>
            <Information />
          </Grid>
          <Grid item xs={7}>
            {element}
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

export default connect(mapStateToProps, null)(Profile);