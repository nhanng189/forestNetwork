import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import '../../../Style/TimelinePost.css';

class Post extends Component {
  render() {
    return (
      <Card className="tlp-card" >
        <CardHeader
          className="tlp-card-header"
          title={
            <div>
              <div className="tlp-username">{this.props.from ? 'Nhận tiền' : 'Gửi tiền'}</div>
              <div className="tlp-time">{moment(this.props.time).format('MMMM Do YYYY, h:mm:ss a')}</div>
            </div>
          }
        />
        <CardContent className="tlp-card-content">
          <div className="tlp-title">
            {this.props.from
              ? `Nhận ${this.props.amount}`
              : `Chuyển ${this.props.amount}`}
          </div>
          {this.props.from
            ? <Link to={`/account/${this.props.from}`}>Xem người gửi</Link>
            : <Link to={`/account/${this.props.to}`}>Xem người nhận</Link>}
        </CardContent>
      </Card>
    );
  }
}

export default Post;