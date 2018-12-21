import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Navibar from '../Navibar';

class Explorer extends Component {
    render() {
        if(!this.props.profileData) {
            return <Redirect to="/login" />;
        }
        
        return (
            <Navibar />
        );
    }
}

export default withRouter(connect(
    function(state) {
        return {
            profileData: state.myProfile.profileData
        }
    },
    null
)(Explorer));