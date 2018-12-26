import React from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import { Button } from '@material-ui/core';

import { makeUpdatePictureTx } from '../util';

class EditAvatarDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar: ''
    }
  }

  onChange = (e) => {
    let img = e.target.files[0];
    let fr = new FileReader();

    fr.addEventListener('load', (e) => {
      let temp = e.target.result;

      while (true) {
        if (temp.charAt(0) !== ',') {
          temp = temp.substr(1);
        } else {
          temp = temp.substr(1);
          break;
        }
      }
      this.setState({
        avatar: temp
      })
    });

    fr.readAsDataURL(img);
  }

  handleClose = () => {
    this.props.onClose();
  };

  onEdit = async () => {
    if (window.confirm('Bạn có chắc chắn muốn đổi Avatar?')) {
      try {
        let res = await makeUpdatePictureTx(
          parseInt(this.props.profileData.info.sequence) + 1,
          this.state.avatar,
          sessionStorage.getItem('forest_network_account')
        );

        if (res.result.check_tx.code) {
          alert('ERROR ' + res.result.check_tx.log);
        } else {
          alert('Đổi ảnh thành công');
          this.setState({
            name: '',
          });
        }
      } catch (err) {
        alert('ERROR ' + err.message);
      }
    } else {

    }
  }

  render() {
    const { ...other } = this.props;

    return (
      <Dialog {...other}>
        <List>
          <ListItem style={{ paddingBottom: "0", paddingTop: "0" }}>
            <ListItemText>
              <form noValidate autoComplete="off">
                <input type="file"
                  id="avatar" name="avatar"
                  accept="image/png, image/jpeg"
                  style={{ margin: '10px' }}
                  onChange={this.onChange} />
              </form>
            </ListItemText>
          </ListItem>
        </List>
        <div>
          <Button onClick={this.handleClose} style={{ marginBottom: "15px", padding: "10px", marginRight: "40px", width: "30px", float: "right" }} variant="contained" color="primary">
            Cancel
          </Button>
          <Button onClick={this.onEdit} style={{ marginBottom: "15px", padding: "10px", marginRight: "15px", width: "30px", float: "right" }} variant="contained" color="primary">
            Update
          </Button>
        </div>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  profileData: state.myProfile.profileData
})

export default connect(mapStateToProps, null)(EditAvatarDialog)