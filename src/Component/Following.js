import React from 'react';
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Dialog from '@material-ui/core/Dialog';

class FollowingDialog extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { onClose, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} {...other}>
        <List>
          <ListSubheader style={{ fontSize: "16px", backgroundColor: "white", width: "250px" }}>Following people</ListSubheader>
          {this.props.myFollowing.map((following) => {
            return (
              <ListItem style={{ marginBottom: "5px" }} button>
                <ListItemAvatar>
                  <Avatar alt="" src={following.avatar} />
                </ListItemAvatar>
                <ListItemText>
                  <div style={{ fontSize: "11px" }}>{following.name}</div>
                </ListItemText>
              </ListItem>
            )
          })}
        </List>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  myFollowing: state.myFollowing
})

export default connect(
  mapStateToProps,
  null
)(FollowingDialog)