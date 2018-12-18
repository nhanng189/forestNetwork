import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import '../../../Style/TimelinePost.css';

class Posts extends Component {
  render() {
    const profileData = Object.assign({}, this.props.myProfile.profileData);
    const post = Object.assign({}, profileData.post);
    const posts = Object.values(post)

    let elements = posts.map((post) => {
      return <Post
        content={post.content}
        time={post.time}
      />
    })
    return (
      <div style={{ marginTop: "50px" }}>
        {elements}
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
)(Posts)