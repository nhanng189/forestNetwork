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
      accData: {},
      isFollowed: false
    }
  }

  setScreen = (screen) => {
    this.setState({
      screen: screen
    })
  }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      axios.get(host + '/account/' + this.props.match.params.publicKey)
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

  componentWillReceiveProps(nextProp) {
    if (this.props.match.params.publicKey !== nextProp.match.params.publicKey) {
      axios.get(host + '/account/' + nextProp.match.params.publicKey)
        .then(res => {
          this.setState({
            accData: res.data,
            isMe: nextProp.match.params.publicKey === this.props.profileData.info.public_key,
            isFollowed: this.props.profileData.info.follow ? this.props.profileData.info.follow.split(',').includes(nextProp.match.params.publicKey) : false
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

    let countPayment = 0;
    let countPost = 0;

    if (this.state.accData.tx) {
      for (let key in this.state.accData.tx.send) {
        countPayment++;
      }
      for (let key in this.state.accData.tx.receive) {
        countPayment++;
      }
      for (let key in this.state.accData.tx.post) {
        countPost++;
      }
    }

    return (
      <div>
        <Navibar />
        {this.state.accData.info && <Headers setScreen={this.setScreen} accInfo={this.state.accData.info} isMe={this.state.isMe} numEx={countPayment} numPost={countPost} />}
        <Grid container spacing={32}>
          <Grid item xs={1} />
          <Grid item xs={3}>
            {this.state.accData.info && <Information accInfo={this.state.accData.info} isMe={this.state.isMe} isFollowed={this.state.isFollowed} publicKey={this.state.accData.info.public_key}/>}
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