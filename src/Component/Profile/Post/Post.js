import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleLove, addComment } from '../../../actions'
import moment from 'moment'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InputBase from '@material-ui/core/InputBase';

import Love3 from '../../../icons/love3.png';
import Share from '../../../icons/share.png';
import Love4 from '../../../icons/love4.png';
import Comment from '../../../icons/comment.png';
import '../../../Style/TimelinePost.css';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.props.id, "Fumika", this.state.comment)
    this.setState({
      comment: ""
    })
  }

  onChange = (event) => {
    var target = event.target;
    var value = target.value;
    var name = target.name;

    this.setState({
      [name]: value
    })
  }

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
                <Link to={this.props.public_key}>
                  {this.props.name ? this.props.name : 'Unnamed'}
                </Link>
              </div>
              <div className="tlp-time">{moment(this.props.time).format('MMMM Do YYYY, h:mm:ss a')}</div>
            </div>
          }
        />
        <CardContent className="tlp-card-content">
          <div className="tlp-title">
            {this.props.content}
          </div>
        </CardContent>
        {/* <CardMedia
          component={Link} to={`/post/${this.props.id}`}
          className="tlp-card-media"
          image='https://www.w3schools.com/w3css/img_lights.jpg'
        >
        </CardMedia> */}
        <CardActions disableActionSpacing className="tlp-card-action">
          <div className="tlp-action-field">
            <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon" onClick={() => this.props.toggleLove(this.props.id)}>
              <img className="tlp-action-icon-img" alt="" src={Love3} />
            </IconButton>
            {/* {this.props.loved ? `Loved ${this.props.love}` : `Love ${this.props.love}`} */}
          </div>
          <div style={{ flexGrow: "1" }} />
          <div className="tlp-action-field">
            <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon">
              <img className="tlp-action-icon-img" alt="" src={Comment} />
            </IconButton>
            {/* {`Comment ${this.props.comment}`} */}
          </div>
        </CardActions>
        <div style={{ padding: "0 15px 0 15px" }}><hr /></div>
        <CardActions disableActionSpacing className="tlp-card-action-comment">
          <form style={{ width: "100%" }} onSubmit={this.onSubmit}>
            <InputBase style={{ fontSize: "14px" }} fullWidth placeholder="Add your comment ..."
              name="comment" value={this.state.comment} type="text" onChange={this.onChange} />
          </form>
        </CardActions>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleLove: id => dispatch(toggleLove(id)),
  addComment: (id, user, comment) => dispatch(addComment(id, user, comment))
})

export default connect(
  null,
  mapDispatchToProps
)(Post)