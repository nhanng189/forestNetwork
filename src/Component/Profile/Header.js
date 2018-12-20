import React, { Component } from 'react';
import { connect } from 'react-redux';
import jpeg from 'jpeg-js';

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
import EditDialog from '../Edit';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      followersOpen: false,
      followingOpen: false,
      editOpen: false
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

  handleEditOpen = () => {
    this.setState({
      editOpen: true
    })
  }

  handleClose = () => {
    this.setState({
      followersOpen: false,
      followingOpen: false,
      editOpen: false
    });
  };

  setScreen = (screen) => {
    this.props.setScreen(screen)
  }

  render() {
    const profileData = Object.assign({}, this.props.myProfile.profileData);
    const info = Object.assign({}, profileData.info);
    const name = info.name ? info.name : 'Unnamed';
    const imageStr = `data:image/png;base64,${info.picture}`;

    return (
      <div>
        <Card style={{ marginTop: "90px", height: "320px", backgroundImage: "url(http://mkkr.biz/wp-content/uploads/css3-background-patterns-css-light-live-background-people.jpg)"}}>
          <div style={{ zIndex: "1000", position: "absolute", marginLeft: "184px", marginTop: "150px" }}>
            <Avatar style={{ border: "5px white solid", float: "left", width: "200px", height: "200px" }} alt="" src={imageStr} />
            <div style={{ float: "left", fontSize: "35px", fontWeight: "bolder", marginLeft: "50px", marginTop: "25px" }}>
              {name}
              &nbsp;
              <IconButton onClick={this.handleEditOpen} style={{ marginBottom: "5px" }}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={this.handleEditOpen} style={{ marginBottom: "5px" }}>
                <PhotoIcon />
              </IconButton>
            </div>
          </div>
          <CardMedia style={{ height: "250px" }}
            image={this.props.myProfile.wallpaper}>
          </CardMedia>
          <CardActions >
            <div style={{ zIndex: "1001", marginLeft: "420px" }}>
              <Button style={{ fontSize: "11px", width: "100px" }} onClick={() => this.setScreen('0')}>
                <div>
                  Post
                  <br />
                  {this.props.myPosts.length}
                </div>
              </Button>
              <Button style={{ fontSize: "11px", width: "100px" }} onClick={() => this.setScreen('1')}>
                <div>
                  Exchange
                  <br />
                  {this.props.myFollowers.length}
                </div>
              </Button>
              <Button style={{ fontSize: "11px", width: "100px" }} onClick={this.handleFollowersOpen}>
                <div>
                  Follower
                  <br />
                  {this.props.myFollowers.length}
                </div>
              </Button>
              <Button style={{ fontSize: "11px", width: "100px" }} onClick={this.handleFollowingOpen}>
                <div>
                  Following
                  <br />
                  {this.props.myFollowing.length}
                </div>
              </Button>
            </div>
          </CardActions>
        </Card>
        <FollowersDialog
          open={this.state.followersOpen}
          onClose={this.handleClose}
        />
        <FollowingDialog
          open={this.state.followingOpen}
          onClose={this.handleClose}
        />
        <EditDialog
          open={this.state.editOpen}
          onClose={this.handleClose}
        />
      </div >
    );
  }
}

const mapStateToProps = state => ({
  myProfile: state.myProfile,
  myFollowers: state.myFollowers,
  myFollowing: state.myFollowing,
  myPosts: state.myPosts
})

export default connect(
  mapStateToProps,
  null
)(Header)