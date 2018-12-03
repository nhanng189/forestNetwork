import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import { CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Header extends Component {
  render() {
    return (
      <div>
        <Card style={{ marginTop: "90px", height: "320px" }}>
          <div style={{ zIndex: "1000", position: "absolute", marginLeft: "184px", marginTop: "150px" }}>
            <Avatar style={{ float: "left", width: "200px", height: "200px" }} alt="" src={this.props.myProfile.avatar} />
            <div style={{ float: "left", fontSize: "35px", fontWeight: "bolder", marginLeft: "50px", marginTop: "25px" }}>{this.props.myProfile.name}</div>
          </div>
          <CardMedia style={{ height: "250px" }}
            image={this.props.myProfile.wallpaper}
          >
          </CardMedia>
          <CardActions >
            <div style={{ zIndex: "1001", marginLeft: "420px" }}>
              <Button style={{ fontSize: "13px", width: "100px" }}>
                <div>
                  Post
                  <br />
                  {this.props.myProfile.posts}
                </div>
              </Button>
              <Button style={{ fontSize: "13px", width: "100px" }}>
                <div>
                  Follower
                  <br />
                  {this.props.myProfile.followers}
                </div>
              </Button>
              <Button style={{ fontSize: "13px", width: "100px" }}>
                <div>
                  Following
                  <br />
                  {this.props.myProfile.following}
                </div>
              </Button>
            </div>
          </CardActions>
        </Card>
      </div >
    );
  }
}

const mapStateToProps = state => ({
  myProfile: state.myProfile
})

export default connect(
  mapStateToProps,
  null
)(Header)