import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Exchange from './Exchange';
import '../../../Style/TimelinePost.css';

class Exchanges extends Component {
  render() {
    const profileData = Object.assign({}, this.props.myProfile.profileData);
    const receive = Object.assign({}, profileData.receive);
    const receives = Object.values(receive)

    const send = Object.assign({}, profileData.send);
    const sends = Object.values(send)

    const updateName = Object.assign({}, profileData.update_name);
    const nameObj = Object.assign({}, Object.values(updateName)[0]);
    const name = nameObj.name;

    const updatePicture = Object.assign({}, profileData.update_picture);
    const pictureObj = Object.assign({}, Object.values(updatePicture)[0]);
    const imageStr = `data:image/png;base64,${pictureObj.picture_base64}`;

    let receiveElement = receives.map((receive) => {
      return <Exchange
        name={name}
        imageStr={imageStr}
        amount={receive.amount}
        from={receive.from}
        time={receive.time}
      />
    })

    let sendElement = sends.map((send) => {
      return <Exchange
        name={name}
        imageStr={imageStr}
        amount={send.amount}
        to={send.to}
        time={send.time}
      />
    })
    return (
      <div style={{ marginTop: "50px" }}>
        <Grid container spacing={32}>
          <Grid item xs={6}>
            {receiveElement}
          </Grid>
          <Grid item xs={6}>
            {sendElement}
          </Grid>
        </Grid>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  myProfile: state.myProfile
})

export default connect(
  mapStateToProps,
  null
)(Exchanges)