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

const mapStateToProps = (state) => {
    return {
        profileData: state.myProfile.profileData
    }
}

export default withRouter(connect(mapStateToProps, null)(Explorer));