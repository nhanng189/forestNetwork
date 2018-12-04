import React from 'react';
import { connect } from 'react-redux';

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
                  Nickname: &nbsp;
                  {this.props.myProfile.nickname}
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CakeIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  Birthday: &nbsp;
                  {this.props.myProfile.birthday}
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  Current job: &nbsp;
                  {this.props.myProfile.job}
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  Living in: &nbsp;
                  {this.props.myProfile.address}
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  Hometown: &nbsp;
                  {this.props.myProfile.hometown}
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