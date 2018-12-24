import React, { Component } from 'react';

import Post from './Post';
import '../../../Style/TimelinePost.css';

class Posts extends Component {
  render() {
    const posts = this.props.posts;
    const accInfo = this.props.accInfo;

    let postsArr = [];

    for (let key in posts) {
      let temp = posts[key];
      temp.hash = key;
      postsArr.push(temp);
    }

    let elements = postsArr.map((post) => {
      return <Post
        name={accInfo.name}
        public_key={accInfo.public_key}
        imageStr={`data:image/png;base64,${accInfo.picture}`}
        content={post.content}
        time={post.time}
        key={post.hash}
        hash={post.hash}
      />
    })
    return (
      <div style={{ marginTop: "50px" }}>
        {elements}
      </div >
    );
  }
}

export default Posts;