import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';

class FollowersDialog extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  render() {
    const { onClose, ...other } = this.props;

    return (
      <Dialog onClose={this.handleClose} {...other}>
        <List>
          <ListSubheader style={{ fontSize: "16px", backgroundColor: "white", width: "250px" }}>Followers</ListSubheader>
          {this.props.list.map((follower) => {
            return (
              <Link to={`/account/${follower}`} key={follower}>
                <ListItem style={{ marginBottom: "5px" }} button>
                  <ListItemText>
                    <div style={{ fontSize: "11px" }}>{follower}</div>
                  </ListItemText>
                </ListItem>
              </Link>
            )
          })}
        </List>
      </Dialog>
    );
  }
}

export default FollowersDialog;