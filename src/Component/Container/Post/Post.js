import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';

import Love3 from '../../../icons/love3.png';
import Comment from '../../../icons/comment.png';
import '../../../Style/TimelinePost.css';

class Post extends Component {
  render() {
    return (
      <Card className="tlp-card" >
        <CardHeader
          className="tlp-card-header"
          avatar={
            <Avatar src={this.props.imageStr} className="tlp-avatar">
              <Avatar src='' className="tlp-avatar"></Avatar>
            </Avatar>
          }
          title={
            <div>
              <div className="tlp-username">
                <Link to={`/account/${this.props.public_key}`}>
                  {((this.props.name) && (this.props.name !== '')) ? this.props.name : this.props.public_key}
                </Link>
              </div>
              <div className="tlp-time">
                <a href={`https://forest.network/transactions/${this.props.hash}`} target={`_blank`}>{moment(this.props.time).format('MMMM Do YYYY, h:mm:ss a')}
                </a>
              </div>
            </div>
          }
        />
        <CardContent className="tlp-card-content">
          <div className="tlp-title">
            {this.props.content}
          </div>
        </CardContent>
        <CardActions disableActionSpacing className="tlp-card-action">
          <div className="tlp-action-field">
            <IconButton  className="tlp-action-icon" onClick={(e) => e.preventDefault()}>
              <img className="tlp-action-icon-img" alt="" src={Love3} />
            </IconButton>
            <IconButton  className="tlp-action-icon" onClick={(e) => e.preventDefault()}>
              <img className="tlp-action-icon-img" alt="" src={Love3} />
            </IconButton>
            <IconButton  className="tlp-action-icon" onClick={(e) => e.preventDefault()}>
              <img className="tlp-action-icon-img" alt="" src={Love3} />
            </IconButton>
            <IconButton  className="tlp-action-icon" onClick={(e) => e.preventDefault()}>
              <img className="tlp-action-icon-img" alt="" src={Love3} />
            </IconButton>
            <IconButton   className="tlp-action-icon" onClick={(e) => e.preventDefault()}>
              <img className="tlp-action-icon-img" alt="" src={Love3} />
            </IconButton>
            <IconButton   className="tlp-action-icon" onClick={(e) => e.preventDefault()}>
              <img className="tlp-action-icon-img" alt="" src={Love3} />
            </IconButton>
          </div>
          <div style={{ flexGrow: "1" }} />
          <div className="tlp-action-field">
            <IconButton  className="tlp-action-icon">
              <img className="tlp-action-icon-img" alt="" src={Comment} />
            </IconButton>
          </div>
        </CardActions>
        <div style={{ padding: "0 15px 0 15px" }}><hr /></div>
        <CardActions disableActionSpacing className="tlp-card-action-comment">
          <form style={{ width: "100%" }} onSubmit={(e) => e.preventDefault()}>
            <InputBase style={{ fontSize: "14px" }} fullWidth placeholder="Add your comment ..."
              name="comment" type="text" />
          </form>
        </CardActions>
      </Card>
    );
  }
}

export default Post;