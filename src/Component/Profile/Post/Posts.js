import React, { Component } from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import '../../../Style/TimelinePost.css';

class Posts extends Component {
  render() {
    let elements = this.props.myPosts.map((post) => {
      return <Post
        id={post.id}
        avatar={post.avatar} user={post.user}
        time={post.time} title={post.title}
        images={post.images} love={post.love}
        comment={post.comment} loved={post.loved}
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
  myPosts: state.myPosts
})

export default connect(
  mapStateToProps,
  null
)(Posts)