import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import { logout } from '../../redux/authActionCreators';

const maoDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
    }
}

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
    }
    render() {
        return (
            <Redirect to="/"/>
        )
    }
}

export default connect(null, maoDispatchToProps)(Logout);