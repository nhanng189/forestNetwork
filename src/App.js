import React, { Component } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

import Signin from './Component/Container/Signin';
import Profile from './Component/Profile/Profile';
import './App.css';

var hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="gra">
        <Router history={hist}>
          <Switch>
            <Route path="/login" component={Signin} />
            <Route path="/account/:publicKey" component={Profile} />

            {!this.props.myProfile.profileData && <Redirect to="/login" />}
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        myProfile: state.myProfile
    }
}

export default connect(
    mapStateToProps,
    null)(App);
