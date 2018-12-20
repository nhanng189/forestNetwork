import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import '../../../Style/TimelinePost.css';

class Posts extends Component {
  render() {
    const profileData = Object.assign({}, this.props.myProfile.profileData);
    const tx = Object.assign({}, profileData.tx);
    const post = Object.assign({}, tx.post);
    const posts = Object.values(post)

    const info = Object.assign({}, profileData.info);
    const name = info.name;
    const public_key = info.public_key;
    const imageStr = `data:image/png;base64,${info.picture}`;

    let elements = posts.map((post) => {
      return <Post
        name={name}
        public_key={public_key}
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