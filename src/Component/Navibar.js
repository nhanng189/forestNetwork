import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { logOutAction } from '../actions';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AddIcon from '@material-ui/icons/Add';

import Logo1 from '../icons/logo1.png';
import '../Style/Navibar.css';

class Navibar extends Component {
  render() {
    if(!this.props.profileData) {
      return <Redirect to="/login" />;
    }

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
              <Button component={Link} to={`/account/${this.props.profileData.info.public_key}`} className="page-button" color="inherit">MY WALL</Button>
              <Button component={Link} to="/payment" className="page-button" color="inherit">PAYMENT</Button>
              <Button component={Link} to="/create" className="page-button" color="inherit">CREATE ACCOUNT</Button>
              <Button component={Link} to="/post" style={{ height: "35px", backgroundColor: "#a000a5", fontSize: "11px", color: "white", padding: "2px 10px 2px 7px", marginLeft: "25px" }} variant="contained" onClick={this.selectedPickImage}>
                <AddIcon />New post
              </Button>
              <Button className="page-button" disabled color="inherit">|</Button>
              <Button onClick={() => {this.props.logOut()}} className="page-button" color="inherit">LOGOUT</Button>
            </Toolbar>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </AppBar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileData: state.myProfile.profileData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOutAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navibar));