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
      name: ""
    }
  }

  componentWillMount() {
    this.setState({
      name: this.props.myProfile.name,
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
    const { name } = this.state;
    this.props.editProfile(name);
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
  myProfile: state.myProfile
})

const mapDispatchToProps = dispatch => ({
  editProfile: (name) => dispatch(editProfile(name))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDialog)