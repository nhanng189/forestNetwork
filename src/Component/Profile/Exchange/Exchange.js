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
              <div className="tlp-username">{this.props.from 
                                  ? <a href={`https://forest.network/transactions/${this.props.hash}`} target={`_blank`}>Nhận tiền</a> 
                                  : <a href={`https://forest.network/transactions/${this.props.hash}`} target={`_blank`}>Chuyển tiền</a> }
              </div>
              <div className="tlp-time">{moment(this.props.time).format('MMMM Do YYYY, h:mm:ss a')}</div>
            </div>
          }
        />
        <CardContent className="tlp-card-content">
          <div className="tlp-title">
            {this.props.from
              ? `+ ${this.props.amount} CEL`
              : `- ${this.props.amount} CEL`}
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