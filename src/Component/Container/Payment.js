import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import Navibar from '../Navibar';
import '../../Style/Main.css';
import { CardContent, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { makePaymentTx } from '../../util';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicKey: '',
            amount: '',
            message: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onCancel = () => {
        this.setState({
            publicKey: '',
            amount: 0,
            message: ''
        })
    }

    onSubmit = () => {
        try {
            makePaymentTx(
                parseInt(this.props.profileData.info.sequence) + 1,
                this.state.message,
                this.state.publicKey,
                parseInt(this.state.amount),
                sessionStorage.getItem('forest_network_account')
            )
        } catch (err) {
            alert(err.message);
        }
        
    }

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
                                name="publicKey"
                                value={this.state.publicKey}
                                onChange={this.onChange}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                label="Amount"
                                name="amount"
                                value={this.state.amount}
                                onChange={this.onChange}
                                type="number"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            />
                            <TextField
                                label="Message"
                                name="message"
                                value={this.state.message}
                                onChange={this.onChange}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            />
                            <div style={{ textAlign: 'center' }}>
                                <Button variant="contained" style={{ margin: '10px' }} onClick={this.onCancel}>
                                    Nhập lại
                                </Button>
                                <Button variant="contained" style={{ margin: '10px' }} onClick={this.onSubmit} color="secondary">
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