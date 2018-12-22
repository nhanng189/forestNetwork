import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import Explorer from './Component/Container/Explorer';
import Signin from './Component/Container/Signin';
import Profile from './Component/Profile/Profile';
import Payment from './Component/Container/Payment';
import CreateAcc from './Component/Container/CreateAcc';
import NewPost from './Component/Container/NewPost';
import './App.css';

var hist = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="gra">
        <Router history={hist}>
          <Switch>
            <Route exact path="/" component={Explorer} />
            <Route path="/login" component={Signin} />
            <Route path="/payment" component={Payment} />
            <Route path="/account/:publicKey" component={Profile} />
            <Route path="/create" component={CreateAcc} />
            <Route path="/post" component={NewPost} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

function NoMatch(props) {
  return <h3 style={{ textAlign: 'center', backgroundColor: 'none' }}>Error 404: Not Found</h3>;
}

const mapStateToProps = (state) => {
  return {
    profileData: state.myProfile.profileData
  }
}

export default connect(mapStateToProps, null)(App);