import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

import '../../Style/signin.css';
import host from '../../Host';
import { setProfileData } from '../../actions';

class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      publicKey: ''
    }
  }

  onChange = (event) => {
    var target = event.target;
    var value = target.value;
    var name = target.name;

    this.setState({
      [name]: value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
  }

  handleClick = () => {
      axios.get(host + '/account/' + this.state.publicKey)
        .then((res) => {
            if(res.data.account_not_exists) {
                alert('Account does not exist');
            } else {
                this.props.setProfileData(res.data);
                this.props.history.push('/');
            }
        })
        .catch((err) => {

        })
  }

  render() {
        if(this.props.profileData) {
            return <Redirect to="/" />
        }

        return (
            <div className="signin-container background">
                <div className="signin-app-title">MẠNG TRONG RỪNG</div>
                <Grid container justify="center" alignItems="center">
                <Card className="card">
                    <div className="card-content">
                    <h4 style={{ textAlign: "center", fontWeight: "bold"}}>Chào mừng đến với mạng rừng!</h4>
                    <form onSubmit={this.onSubmit} noValidate autoComplete="off">
                        <TextField
                        style={{ marginTop: "35px", marginBottom: "35px"}}
                        name="publicKey"
                        label="Public key"
                        value={this.state.publicKey}
                        onChange={this.onChange}
                        fullWidth
                        />
                    </form>
                    <Button onClick={this.handleClick} size="large" variant="extendedFab" color="secondary">
                        <h6>Đăng nhập</h6>
                    </Button>
                    </div>
                </Card>
                </Grid>
            </div>
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
        setProfileData: (data) => dispatch(setProfileData(data))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signin));
