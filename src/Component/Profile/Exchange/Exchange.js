import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLove, addComment } from '../../../actions'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';

import '../../../Style/TimelinePost.css';

class Post extends Component {
  render() {
    return (
      <Card className="tlp-card" >
        <CardHeader
          className="tlp-card-header"
          avatar={
            <Avatar src={this.props.avatar} className="tlp-avatar">
              <Avatar src='' className="tlp-avatar"></Avatar>
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <div>
              <div className="tlp-username">Username</div>
              <div className="tlp-time">{this.props.time}</div>
            </div>
          }
        />
        <CardContent className="tlp-card-content">
          <div className="tlp-title">
            Receive {this.props.amount} from {this.props.from}
          </div>
        </CardContent>
      </Card>
    );
  }
}

export default connect(
  null,
  null
)(Post)