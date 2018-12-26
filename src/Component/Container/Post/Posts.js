import React, { Component } from 'react';

import Post from './Post';
import '../../../Style/TimelinePost.css';

class Posts extends Component {
  render() {
    let elements = this.props.data.posts ? this.props.data.posts.map((post) => {
      return <Post
        name={this.props.data.names[post.account]}
        public_key={post.account}
        imageStr={`data:image/png;base64,${this.props.data.avatars[post.account]}`}
        content={post.content}
        time={post.time}
        key={post.hash}
        hash={post.hash}
      />
    }) : null;
    
    return (
      <div style={{ marginTop: "50px" }}>
        {elements}
      </div >
    );
  }
}

export default Posts;