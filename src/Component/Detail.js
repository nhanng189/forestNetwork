import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleLove, addComment } from '../actions'
import Navibar from './Navibar';
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import CardMedia from '@material-ui/core/CardMedia';
import Love3 from '../icons/love3.png';
import Love4 from '../icons/love4.png';
import Comment from '../icons/comment.png';
import Check0 from '../icons/check0.png';
import Check1 from '../icons/check1.png';
import '../Style/Detail.css';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    }
  }

  getPost = () => {
    let thisPost = null;
    this.props.myPosts.forEach((post) => {
      if (post.id == this.props.match.params.id) {
        thisPost = post
      }
    })
    return thisPost;
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addComment(this.props.match.params.id, "Fumika", this.state.comment)
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

  detailComment = () => {
    let post = this.getPost();
    let comments = post.commentContent.map((comment) => {
      return (
        <div style={{ height: "30px", marginBottom: "5px", padding: "10px" }}>
          <div style={{ fontWeight: "bold", float: "left" }}>
            {comment.user}
          </div>
          <div style={{ float: "left" }}>
            : {comment.content}
          </div>
        </div>
      );
    })
    return (
      <CardContent>
        <form onSubmit={this.onSubmit}>
          <TextField
            name="comment"
            value={this.state.comment}
            style={{ width: "428px" }}
            type="text"
            variant="outlined"
            placeholder="Add your comment ..."
            InputProps={{
              style: { fontSize: "16px", height: "40px" }
            }}
            onChange={this.onChange}
          />
        </form>
        <div style={{ marginTop: "10px", width: "100%", height: "180px", overflowY: "auto" }}>{comments}</div>
      </CardContent>
    );
  }

  render() {
    let post = this.getPost();
    let color = "primary";

    let tags = post.tags.map((tag) => {
      if (color === "default") color = "primary";
      else if (color === "primary") color = "secondary";
      else color = "default";
      return (
        <Chip color={color} label={tag} style={{ fontSize: "13px", height: "20px", margin: "5px 5px 0 0" }} />
      )
    })

    return (
      <div>
        <Navibar />
        <Grid style={{ marginTop: "90px" }} container spacing={32}>
          <Grid item xs={2} />
          <Grid className="grid" item xs={8}>
            <Card>
              <CardContent>
                <CardMedia
                  className="tlp-card-media"
                  image={post.images[0]}
                >
                </CardMedia>
              </CardContent>
              <Grid container spacing={8}>
                <Grid item xs={6}>
                  <CardContent>
                    <div style={{ marginBottom: "20px", height: "55px" }}>
                      <Avatar style={{ float: "left", width: "55px", height: "55px" }} src={post.avatar} />
                      <div style={{ float: "left", marginLeft: "15px" }}>
                        <div style={{ fontWeight: "bold", marginBottom: "5px", marginTop: "5px" }}>{post.user}</div>
                        <div>{post.time}</div>
                      </div>
                    </div>
                    <div style={{ padding: "10px 0 15px 0" }}>
                      {post.title}
                    </div>
                    <div>
                      {tags}
                    </div>
                  </CardContent>
                  <CardActions disableActionSpacing className="tlp-card-action" style={{ marginBottom: "10px" }}>
                    <div className="tlp-action-field">
                      <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon" onClick={() => this.props.toggleLove(post.id)}>
                        <img className="tlp-action-icon-img" alt="" src={post.loved ? Love4 : Love3} />
                      </IconButton>
                      {post.loved ? `Loved ${post.love}` : `Love ${post.love}`}
                    </div>
                    <div style={{ flexGrow: "1" }} />
                    <div className="tlp-action-field">
                      <IconButton disableRipple="true" disableTouchRipple="true" className="tlp-action-icon">
                        <img className="tlp-action-icon-img" alt="" src={Comment} />
                      </IconButton>
                      {`Comment ${post.comment}`}
                    </div>
                  </CardActions>
                </Grid>
                <Grid item xs={6}>
                  {this.detailComment()}
                </Grid>
              </Grid>
            </Card>
          </Grid>

          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myPosts: state.myPosts
})

const mapDispatchToProps = dispatch => ({
  toggleLove: id => dispatch(toggleLove(id)),
  addComment: (id, user, comment) => dispatch(addComment(id, user, comment))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail)