import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProfileData } from '../../actions/profileAction';

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
      screen: '0'
    }
  }

  setScreen = (screen) => {
    this.setState({
      screen: screen
    })
  }

  componentWillMount = async () => {
    await this.props.getProfileData(this.props.match.params.publicKey);
  }

  render() {
    let element;
    if (this.state.screen === '0') element = <Posts />;
    else if (this.state.screen === '1') element = <Exchanges />;

    return (
      <div>
        <Navibar />
        <Headers setScreen={this.setScreen} />
        <Grid container spacing={32}>
          <Grid item xs={1} />
          <Grid item xs={4}>
            <Information publicKey={this.props.match.params.publicKey} />
          </Grid>
          <Grid item xs={6}>
            {element}
          </Grid>
          <Grid item xs={1} />
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