import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';

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
import Button from '@material-ui/core/Button';

import { makeUpdateFollowTx } from '../../util';

class Information extends React.Component {
  handleFollow = async () => {
    try {
      let arr = this.props.profileData.info ? (this.props.profileData.info.follow ? this.props.profileData.info.follow.split(',') : []) : [];
      arr.push(this.props.publicKey);
      let res = await makeUpdateFollowTx(
        parseInt(this.props.profileData.info.sequence) + 1,
        arr,
        sessionStorage.getItem('forest_network_account')
      );

      if (res.result.check_tx.code) {
        alert('ERROR ' + res.result.check_tx.log);
      }
    } catch (err) {
      alert('ERROR ' + err.message);
    }
  }

  handleUnfollow = async () => {
      try {
        let arr = this.props.profileData.info ? (this.props.profileData.info.follow ? this.props.profileData.info.follow.split(',') : []) : [];
        arr.splice(arr.indexOf(this.props.publicKey), 1);
        let res = await makeUpdateFollowTx(
            parseInt(this.props.profileData.info.sequence) + 1,
            arr,
            sessionStorage.getItem('forest_network_account')
          );
          if (res.result.check_tx.code) {
            alert('ERROR ' + res.result.check_tx.log);
          }
      } catch (err) {
          alert('ERROR ', err.message);
      }
  }

  render() {
    return (
      <div>
        <Card style={{ marginTop: "50px", textAlign: 'center' }}>
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
          {!this.props.isMe &&
            <div>
              {this.props.isFollowed
                ?
                <Button variant="outlined" onClick={this.handleUnfollow} style={{ margin: '10px auto', fontSize: '1.5em' }}>
                  Đã theo dõi
                </Button>
                :
                <Button variant="outlined" onClick={this.handleFollow} color="secondary" style={{ margin: '10px auto', fontSize: '1.5em' }}>
                  Theo dõi
                </Button>}
            </div>
          }
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileData: state.myProfile.profileData
  }
}

export default connect(mapStateToProps, null)(Information);