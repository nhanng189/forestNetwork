import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Exchange from './Exchange';
import '../../../Style/TimelinePost.css';

class Exchanges extends Component {
  render() {
    const send = this.props.exchanges.send;
    const receive = this.props.exchanges.receive;

    let sendArr = [];
    let receiveArr = [];

    for (let key in send) {
      let temp = send[key];
      temp.hash = key;
      sendArr.push(temp);
    }

    for (let key in receive) {
      let temp = receive[key];
      temp.hash = key;
      receiveArr.push(temp);
    }

    let sendElements = sendArr.map((send) => {
      return <Exchange
        amount={send.amount}
        to={send.to}
        time={send.time}
        key={send.hash}
        hash={send.hash}
      />
    })

    let receiveElements = receiveArr.map((receive) => {
      return <Exchange
        amount={receive.amount}
        from={receive.from}
        time={receive.time}
        key={receive.hash}
        hash={receive.hash}
      />
    })

    return (
      <div style={{ marginTop: "50px" }}>
        <Grid container spacing={32}>
          <Grid item xs={6}>
            {sendElements}
          </Grid>
          <Grid item xs={6}>
            {receiveElements}
          </Grid>
        </Grid>
      </div >
    );
  }
}

export default Exchanges;