import React, { Component } from 'react';
import { connect } from 'react-redux';

import Exchange from './Exchange';
import '../../../Style/TimelinePost.css';

class Exchanges extends Component {
  render() {
    const profileData = Object.assign({}, this.props.myProfile.profileData);
    const receive = Object.assign({}, profileData.receive);
    const receives = Object.values(receive)

    const send = Object.assign({}, profileData.send);
    const sends = Object.values(send)
    
    let elements = receives.map((receive) => {
      return <Exchange
        amount={receive.amount}
        from={receive.from}
        time={receive.time}
      />
    })
    return (
      <div style={{ marginTop: "50px" }}>
        {elements}
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