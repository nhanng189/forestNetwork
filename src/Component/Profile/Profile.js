import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
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

  componentDidMount() {
    axios.get(host + '/account/' + this.props.match.params.publicKey)
      .then(res => {
        this.setState({
          accData: res.data,
          isMe: this.props.match.params.publicKey === this.props.profileData.info.public_key 
        });
      })
  }

  componentWillReceiveProps(nextProp) {
    if (this.props.match.params.publicKey !== nextProp.match.params.publicKey) {
      axios.get(host + '/account/' + nextProp.match.params.publicKey)
        .then(res => {
          this.setState({
            accData: res.data,
            isMe: nextProp.match.params.PublicKey === this.props.profileData.info.public_key
          })
        })
    }
  }

  render() {
    if (!this.props.profileData) {
      return <Redirect to="/login" />;
    }

    let element = null;

    if (this.state.screen === '0') {
      if (this.state.accData.tx && this.state.accData.info) {
        element = <Posts posts={this.state.accData.tx.post} accInfo={this.state.accData.info} />
      }
    } else {
      if (this.state.accData.tx) {
        element = <Exchanges exchanges={{ send: this.state.accData.tx.send, receive: this.state.accData.tx.receive }} />
      }
    }

    return (
      <div>
        <Navibar />
        {this.state.accData.info && <Headers setScreen={this.setScreen} accInfo={this.state.accData.info} isMe={this.state.isMe} />}
        <Grid container spacing={32}>
          <Grid item xs={1} />
          <Grid item xs={3}>
            {this.state.accData.info && <Information accInfo={this.state.accData.info} />}
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