import React from 'react';
import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import { makeUpdateNameTx } from '../util';

class EditDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  onChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleClose = () => {
    this.props.onClose();
  };

  onEdit = async () => {
    try {
      let res = await makeUpdateNameTx(
        parseInt(this.props.profileData.info.sequence) + 1,
        this.state.name,
        sessionStorage.getItem('forest_network_account')
      );

      if (res.result.check_tx.code) {
        alert('ERROR ' + res.result.check_tx.log);
      } else {
        alert('Đổi tên thành công');
        this.setState({
          name: '',
        });
      }
    } catch (err) {
      alert('ERROR ' + err.message);
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
                <TextField
                  style={{ width: "300px" }}
                  variant="outlined"
                  name="name"
                  label="Name"
                  value={this.state.name}
                  onChange={this.onChange}
                  margin="normal" />
              </form>
            </ListItemText>
          </ListItem>
        </List>
        <div>
          <Button onClick={this.handleClose} style={{ marginBottom: "15px", padding: "10px", marginRight: "40px", width: "30px", float: "right" }} variant="contained" color="primary">
            Cancel
          </Button>
          <Button onClick={this.onEdit} style={{ marginBottom: "15px", padding: "10px", marginRight: "15px", width: "30px", float: "right" }} variant="contained" color="primary">
            Confirm
          </Button>
        </div>
      </Dialog>
    );
  }
}

const mapStateToProps = state => ({
  profileData: state.myProfile.profileData
})

export default connect(mapStateToProps, null)(EditDialog)