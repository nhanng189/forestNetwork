import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import Navibar from '../Navibar';
import '../../Style/Main.css';
import { CardContent, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import { makePostTx } from '../../util';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = async () => {
        try {
            let res = await makePostTx(
                parseInt(this.props.profileData.info.sequence) + 1,
                this.state.content,
                sessionStorage.getItem('forest_network_account')
            )

            if (res.result.check_tx.code) {
                alert('ERROR ' + res.result.check_tx.log);
            } else {
                alert('Đăng bài thành công');
                this.setState({
                    content: '',
                });
            }
        } catch (err) {
            alert('ERROR ' + err.message);
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
                            <h4>Đăng bài viết mới</h4>
                            <TextField
                                label="What do you think?"
                                multiline
                                rowsMax="8"
                                rows="3"
                                name="content"
                                value={this.state.content}
                                onChange={this.onChange}
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            />
                            <div style={{ textAlign: 'center' }}>
                                <Button variant="contained" style={{ margin: '10px' }} onClick={this.onSubmit} color="secondary">
                                    Đăng bài
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

export default connect(mapStateToProps, null)(NewPost);