import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Dialog from '@material-ui/core/Dialog';
import { Link } from 'react-router-dom';

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
          {this.props.list.map((following, index) => {
            return (
              <Link to={`/account/${following}`} key={following}>
                <ListItem style={{ marginBottom: "5px" }} button>
                  <ListItemText>
                    <div style={{ fontSize: "11px" }}>{'USER'}</div>
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

export default FollowingDialog;