import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import Navibar from '../Navibar';
import '../../Style/Main.css';
import { CardContent, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { makeCreateAccTx } from '../../util';

class CreateAcc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicKey: '',
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = async () => {
        if (window.confirm('Bạn có chắc chắn thực hiện giao dịch?')) {
            try {
                let res = await makeCreateAccTx(
                    parseInt(this.props.profileData.info.sequence) + 1,
                    this.state.publicKey,
                    sessionStorage.getItem('forest_network_account')
                )

                if (res.result.check_tx.code) {
                    alert('ERROR ' + res.result.check_tx.log);
                } else {
                    alert('Tạo tài khoản thành công');
                    this.setState({
                        publicKey: '',
                    });
                }
            } catch (err) {
                alert('ERROR ' + err.message);
            }
        } else {

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
                            <h4>Tạo tài khoản mới</h4>
                            <TextField
                                label="Public Key"
                                name="publicKey"
                                value={this.state.publicKey}
                                onChange={this.onChange}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            />
                            <div style={{ textAlign: 'center' }}>
                                <Button variant="contained" style={{ margin: '10px' }} onClick={this.onSubmit} color="secondary">
                                    Tạo tài khoản
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

export default connect(mapStateToProps, null)(CreateAcc);