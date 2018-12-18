import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'

import '../Style/signin.css';

class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      publicKey: null
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

  render() {
    return (
      <div className="signin-container background">
        <div className="signin-app-title">Mạng trong rừng</div>
        <Grid container justify="center" alignItems="center">
          <Card className="card">
            <div className="card-content">
              <h4 style={{ textAlign: "center", marginTop: "20px" }}>Đăng nhập đi má</h4>
              <form onSubmit={this.onSubmit} noValidate autoComplete="off">
                <TextField
                  style={{ marginTop: "35px", marginBottom: "35px" }}
                  name="publicKey"
                  label="Public key"
                  value={this.state.publicKey}
                  onChange={this.onChange}
                  fullWidth
                />
              </form>
              <Button component={Link} to={"/account/" + this.state.publicKey} size="large" variant="extendedFab" color="secondary">
                <h6>Đăng nhập</h6>
              </Button>
            </div>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default (Signin);
