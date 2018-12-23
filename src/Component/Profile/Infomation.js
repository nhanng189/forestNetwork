import React from 'react';
import { Link } from 'react-router-dom';
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
import MoneyIcon from '@material-ui/icons/AttachMoney';

class Information extends React.Component {
  render() {
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
                  <span style={{ fontWeight: 'bold' }}>Created by: </span>
                  <Link to={'/account/' + this.props.accInfo.created_by}>View detail</Link>
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CakeIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  <span style={{ fontWeight: 'bold' }}>Join: </span>
                  {moment(this.props.accInfo.created_at).format('MMMM Do YYYY')}
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  <span style={{ fontWeight: 'bold' }}>Sequence: </span>
                  {this.props.accInfo.sequence}
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <BatteryIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  <span style={{ fontWeight: 'bold' }}>Energy: </span>
                  {this.props.accInfo.energy} (OXY)
                </div>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MoneyIcon />
              </ListItemIcon>
              <ListItemText>
                <div className="tlp-title">
                  <span style={{ fontWeight: 'bold' }}>Balance: </span>
                  {this.props.accInfo.balance} (CEL)
                </div>
              </ListItemText>
            </ListItem>
          </List>
        </Card>
      </div>
    );
  }
}

export default Information;