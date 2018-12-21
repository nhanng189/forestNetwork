import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';

import Logo1 from '../icons/logo1.png';
import '../Style/Navibar.css';

class Navibar extends Component {
  render() {
    return (
      <AppBar className="appbar" color="inherit" position="static">
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Toolbar>
              <img className="logo" alt="logo" src={Logo1} />
              <div className="flexgrow" />
              <TextField
                className="search"
                variant="outlined"
                placeholder="Enter user's public key ..."
                InputProps={{
                  startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                }}
              />
              <div className="flexgrow" />
              <Button component={Link} to="/" className="page-button" color="inherit">EXPLORE</Button>
              <Button className="page-button" color="inherit">MY WALL</Button>
              <Button className="page-button" color="inherit">PAYMENT</Button>
              <Button className="page-button" color="inherit">CREATE ACCOUNT</Button>
              <Button style={{ height: "35px", backgroundColor: "#a000a5", fontSize: "11px", color: "white", padding: "2px 10px 2px 7px", marginLeft: "25px" }} variant="contained" onClick={this.selectedPickImage}>
                <AddIcon />New post
              </Button>
              <Button className="page-button" disabled color="inherit">|</Button>
              <Button className="page-button" color="inherit">LOGOUT</Button>
            </Toolbar>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </AppBar>
    );
  }
}

export default Navibar;