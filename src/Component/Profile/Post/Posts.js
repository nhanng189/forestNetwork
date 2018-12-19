import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import '../../../Style/TimelinePost.css';

class Posts extends Component {
  render() {
    const profileData = Object.assign({}, this.props.myProfile.profileData);
    const post = Object.assign({}, profileData.post);
    const posts = Object.values(post)

    const updateName = Object.assign({}, profileData.update_name);
    const nameObj = Object.assign({}, Object.values(updateName)[0]);
    const name = nameObj.name;

    const updatePicture = Object.assign({}, profileData.update_picture);
    const pictureObj = Object.assign({}, Object.values(updatePicture)[0]);
    const imageStr = `data:image/png;base64,${pictureObj.picture_base64}`;

    let elements = posts.map((post) => {
      return <Post
        name={name}
        imageStr={imageStr}
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