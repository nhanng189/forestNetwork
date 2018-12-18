import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { getProfileData } from '../../actions/profileAction';
import _ from 'lodash'

import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CakeIcon from '@material-ui/icons/Cake';
import HomeIcon from '@material-ui/icons/Home';
import PlaceIcon from '@material-ui/icons/Place';
import MoodIcon from '@material-ui/icons/Mood';
import WorkIcon from '@material-ui/icons/Work';

class Information extends React.Component {
  render() {
    const profileData = Object.assign({}, this.props.myProfile.profileData);
    const createdBy = profileData.created_by;
    const createdAt = profileData.created_at;
    const budget = "";
    const energy = "";

    return (
      <div>
        <Card style={{ marginTop: "50px" }}>
          <List>
            <ListItem>
              <ListItemIcon>
                <MoodIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  Created by: &nbsp;
                  {createdBy}
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CakeIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  Join: &nbsp;
                  {createdAt}
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  Budget: &nbsp;
                  {budget}
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  Energy: &nbsp;
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

const mapStateToProps = state => ({
  myProfile: state.myProfile
})

export default connect(
  mapStateToProps,
  null
)(Information)