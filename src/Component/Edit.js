import React from 'react';
import { connect } from 'react-redux';
import { editProfile } from '../actions'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

class EditDialog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      avatar: "",
      wallpaper: "",
      nickname: "",
      job: "",
      hometown: "",
      address: "",
      birthday: ""
    }
  }

  componentWillMount() {
    this.setState({
      name: this.props.myProfile.name,
      avatar: this.props.myProfile.avatar,
      wallpaper: this.props.myProfile.wallpaper,
      nickname: this.props.myProfile.nickname,
      job: this.props.myProfile.job,
      hometown: this.props.myProfile.hometown,
      address: this.props.myProfile.address,
      birthday: this.props.myProfile.birthday
    })
  }

  onChange = (event) => {
    var target = event.target;
    var value = target.value;
    var name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleClose = () => {
    this.props.onClose();
  };

  onEdit = () => {
    const { name, avatar, wallpaper, nickname, job, hometown, address, birthday } = this.state;
    this.props.editProfile(name, avatar, wallpaper, nickname, job, hometown, address, birthday);
    this.handleClose();
  }

  render() {
    const { onClose, ...other } = this.props;

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
                  margin="normal"
                  helperText="Some important text"
                />
              </form>
            </ListItemText>
          </ListItem>
          <ListItem style={{ paddingBottom: "0", paddingTop: "0" }}>
            <ListItemText>
              <form noValidate autoComplete="off">
                <TextField
                  style={{ width: "300px" }}
                  variant="outlined"
                  name="avatar"
                  label="Avatar"
                  value={this.state.avatar}
                  onChange={this.onChange}
                  margin="normal"
                  helperText="Some important text"
                />
              </form>
            </ListItemText>
          </ListItem>
          <ListItem style={{ paddingBottom: "0", paddingTop: "0" }}>
            <ListItemText>
              <form noValidate autoComplete="off">
                <TextField
                  style={{ width: "300px" }}
                  variant="outlined"
                  name="wallpaper"
                  label="Wallpaper"
                  value={this.state.wallpaper}
                  onChange={this.onChange}
                  margin="normal"
                  helperText="Some important text"
                />
              </form>
            </ListItemText>
          </ListItem>
          <ListItem style={{ paddingBottom: "0", paddingTop: "0" }}>
            <ListItemText>
              <form noValidate autoComplete="off">
                <TextField
                  style={{ width: "300px" }}
                  variant="outlined"
                  name="nickname"
                  label="Nickname"
                  value={this.state.nickname}
                  onChange={this.onChange}
                  margin="normal"
                  helperText="Some important text"
                />
              </form>
            </ListItemText>
          </ListItem>
          <ListItem style={{ paddingBottom: "0", paddingTop: "0" }}>
            <ListItemText>
              <form noValidate autoComplete="off">
                <TextField
                  style={{ width: "300px" }}
                  variant="outlined"
                  name="job"
                  label="Job"
                  value={this.state.job}
                  onChange={this.onChange}
                  margin="normal"
                  helperText="Some important text"
                />
              </form>
            </ListItemText>
          </ListItem>
          <ListItem style={{ paddingBottom: "0", paddingTop: "0" }}>
            <ListItemText>
              <form noValidate autoComplete="off">
                <TextField
                  style={{ width: "300px" }}
                  variant="outlined"
                  name="hometown"
                  label="Hometown"
                  value={this.state.hometown}
                  onChange={this.onChange}
                  margin="normal"
                  helperText="Some important text"
                />
              </form>
            </ListItemText>
          </ListItem>
          <ListItem style={{ paddingBottom: "0", paddingTop: "0" }}>
            <ListItemText>
              <form noValidate autoComplete="off">
                <TextField
                  style={{ width: "300px" }}
                  variant="outlined"
                  name="address"
                  label="Address"
                  value={this.state.address}
                  onChange={this.onChange}
                  margin="normal"
                  helperText="Some important text"
                />
              </form>
            </ListItemText>
          </ListItem>
          <ListItem style={{ paddingBottom: "0", paddingTop: "0" }}>
            <ListItemText>
              <form noValidate autoComplete="off">
                <TextField
                  style={{ width: "300px" }}
                  variant="outlined"
                  name="birthday"
                  label="Birthday"
                  value={this.state.birthday}
                  onChange={this.onChange}
                  margin="normal"
                  helperText="Some important text"
                />
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
  myProfile: state.myProfile
})

const mapDispatchToProps = dispatch => ({
  editProfile: (name, avatar, wallpaper, nickname, job, hometown, address, birthday) => dispatch(editProfile(name, avatar, wallpaper, nickname, job, hometown, address, birthday))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDialog)