import React from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Dialog from '@material-ui/core/Dialog';

class FollowersDialog extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { onClose, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} {...other}>
        <List>
          <ListSubheader style={{ fontSize: "18px", backgroundColor: "white", width: "250px" }}>Followers</ListSubheader>
          {this.props.myFollowers.map((follower) => {
            return (
              <ListItem style={{ marginBottom: "5px" }} button>
                <ListItemAvatar>
                  <Avatar alt="" src={follower.avatar} />
                </ListItemAvatar>
                <ListItemText>
                  <div style={{ fontSize: "13px" }}>{follower.name}</div>
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
  myFollowers: state.myFollowers
})

export default connect(
  mapStateToProps,
  null
)(FollowersDialog)