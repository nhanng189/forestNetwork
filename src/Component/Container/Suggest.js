import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import '../../Style/Suggest.css';

class Suggest extends Component {
  render() {
    return (
      <Card style={{ marginTop: "50px" }} className="sgg-card">
        <CardHeader
          className="sgg-card-header"
          title={
            <div className="sgg-title">
              Giao dịch gần đây
              <p style={{fontStyle: 'italic', fontWeight: 'lighter', fontSize: '0.7em'}}>Đang cập nhật..</p>
            </div>
          }
        />
      </Card>
    );
  }
}

export default Suggest;