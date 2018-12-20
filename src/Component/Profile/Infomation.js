import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CakeIcon from '@material-ui/icons/Cake';
import BatteryIcon from '@material-ui/icons/BatteryFull';
import AddIcon from '@material-ui/icons/AddCircle';
import WorkIcon from '@material-ui/icons/Work';

class Information extends React.Component {
  render() {
    const profileData = Object.assign({}, this.props.myProfile.profileData);
    const info = Object.assign({}, profileData.info);

    const createdBy = info.created_by;
    const createdAt = info.created_at;
    const sequence = info.sequence;
    const energy = info.energy;

    return (
      <div>
        <Card style={{ marginTop: "50px" }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  <span style={{fontWeight: 'bold'}}>Created by: </span>
                  <a href={'/account/' + createdBy}>View detail</a>
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CakeIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  <span style={{fontWeight: 'bold'}}>Join: </span>
                  {moment(createdAt).format('MMMM Do YYYY')}
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  <span style={{fontWeight: 'bold'}}>Sequence: </span>
                  {sequence}
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BatteryIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  <span style={{fontWeight: 'bold'}}>Energy: </span>
                  {energy}
                </div>
              </ListItemText>
            </ListItem>
          </List>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  myProfile: state.myProfile
});

export default connect(
  mapStateToProps,
  null
)(Information);