import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import Navibar from '../Navibar';
import '../../Style/Main.css';
import { CardContent, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Payment extends Component {
    render() {
        if (!this.props.profileData) {
            return <Redirect to="/login" />;
        }

        return (
            <div>
                <Navibar />
                <div className="main-container payment">
                    <Card>
                        <CardContent>
                            <h4>Chuyển tiền đến tài khoản khác</h4>
                            <TextField
                                label="Public Key"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                label="Amount"
                                type="number"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                label="Message"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            />
                            <div style={{textAlign: 'center'}}>
                                <Button variant="contained" style={{ margin: '10px' }}>
                                    Nhập lại
                                </Button>
                                <Button variant="contained" style={{ margin: '10px' }} color="secondary">
                                    Xác nhận
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profileData: state.myProfile.profileData
    }
}

export default connect(mapStateToProps, null)(Payment);