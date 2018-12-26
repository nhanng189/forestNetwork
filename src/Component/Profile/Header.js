import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { CardActions } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Create';
import PhotoIcon from '@material-ui/icons/InsertPhoto';

import FollowingDialog from '../Following';
import FollowersDialog from '../Followers';
import EditNameDialog from '../Edit';
import EditAvatarDialog from '../EditAvatar';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      followersOpen: false,
      followingOpen: false,
      editNameOpen: false,
      editAvatarOpen: false
    }
  }

  handleFollowersOpen = () => {
    this.setState({
      followersOpen: true
    })
  }

  handleFollowingOpen = () => {
    this.setState({
      followingOpen: true
    })
  }

  handleEditNameOpen = () => {
    this.setState({
      editNameOpen: true
    })
  }

  handleEditAvatarOpen = () => {
    this.setState({
      editAvatarOpen: true
    });
  }

  handleClose = () => {
    this.setState({
      followersOpen: false,
      followingOpen: false,
      editNameOpen: false,
      editAvatarOpen: false
    });
  };

  setScreen = (screen) => {
    this.props.setScreen(screen)
  }

  render() {
    let followerArr = [];
    if (this.props.accInfo.followed) {
      for (let key in this.props.accInfo.followed) {
        followerArr.push(key);
      }
    }
    let followingArr = this.props.accInfo.follow ? this.props.accInfo.follow.split(',') : [];

    return (
      <div>
        <Card style={{ marginTop: "90px", height: "320px", backgroundImage: "url(http://mkkr.biz/wp-content/uploads/css3-background-patterns-css-light-live-background-people.jpg)" }}>
          <div style={{ zIndex: "1000", position: "absolute", marginLeft: "184px", marginTop: "150px" }}>
            <Avatar style={{ border: "5px white solid", float: "left", width: "200px", height: "200px" }} alt="" src={`data:image/png;base64,${this.props.accInfo.picture}`} />
            <div style={{ float: "left", fontSize: "35px", fontWeight: "bolder", marginLeft: "50px", marginTop: "25px" }}>
              {((this.props.accInfo.name) && (this.props.accInfo.name !== '')) ? this.props.accInfo.name : this.props.accInfo.public_key.slice(0, 15).concat('...')}
              &nbsp;
              {this.props.isMe &&
                <IconButton onClick={this.handleEditNameOpen} style={{ marginBottom: "5px" }}>
                  <EditIcon />
                </IconButton>}
              {this.props.isMe &&
                <IconButton onClick={this.handleEditAvatarOpen} style={{ marginBottom: "5px" }}>
                  <PhotoIcon />
                </IconButton>}
            </div>
          </div>
          <CardMedia style={{ height: "250px" }}
            src="http://mkkr.biz/wp-content/uploads/css3-background-patterns-css-light-live-background-people.jpg">
          </CardMedia>
          <CardActions >
            <div style={{ zIndex: "1001", marginLeft: "420px" }}>
              <Button style={{ fontSize: "11px", width: "100px" }} onClick={() => this.setScreen('0')}>
                <div>
                  Post
                  <br />
                  {this.props.numPost}
                </div>
              </Button>
              <Button style={{ fontSize: "11px", width: "100px" }} onClick={() => this.setScreen('1')}>
                <div>
                  Exchange
                  <br />
                  {this.props.numEx}
                </div>
              </Button>
              <Button style={{ fontSize: "11px", width: "100px" }} onClick={this.handleFollowersOpen}>
                <div>
                  Follower
                  <br />
                  {followerArr.length}
                </div>
              </Button>
              <Button style={{ fontSize: "11px", width: "100px" }} onClick={this.handleFollowingOpen}>
                <div>
                  Following
                  <br />
                  {followingArr.length}
                </div>
              </Button>
            </div>
          </CardActions>
        </Card>
        <FollowersDialog
          list={followerArr}
          open={this.state.followersOpen}
          onClose={this.handleClose}
        />
        <FollowingDialog
          list={followingArr}
          open={this.state.followingOpen}
          onClose={this.handleClose}
        />
        <EditNameDialog
          open={this.state.editNameOpen}
          onClose={this.handleClose}
        />
        <EditAvatarDialog
          open={this.state.editAvatarOpen}
          onClose={this.handleClose}
        />
      </div>
    );
  }
}

export default Header;