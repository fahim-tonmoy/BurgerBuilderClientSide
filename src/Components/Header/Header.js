import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Navbar, 
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import "./Header.css";
import Logo from '../../assets/logo.png';

import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        token: state.token,
    }
}

const Header = props => {
    let links = null;
    if(props.token === null) {
        // If not logged in
        links = (
            <Nav className=" ms-auto  me-md-5 me-sm-5">
                <NavItem>
                    <NavLink exact to="/login" className="NavLink" > Login </NavLink>
                </NavItem>
            </Nav>
        )
        
    } else {
        // If logged in
        links = (
            <Nav className=" ms-auto  me-md-5 me-sm-5">
                <NavItem>
                    <NavLink exact to="/" className="NavLink" > Burger Builder </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact to="/orders" className="NavLink" > Orders </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink exact to="/logout" className="NavLink" > Logout </NavLink>
                </NavItem>
            </Nav>
        )
    }
    return (
        <div className="Navigation">
                <Navbar 
                style={{
                backgroundColor: "#D70F64",
                height: "70px",
                }}>
                    <NavbarBrand className="me-auto ms-md-5 Brand" href="/">
                        <img src={ Logo } alt="" width="80px" />
                    </NavbarBrand>
                    {
                        links
                    }
                </Navbar>
        </div>
    )
}

export default connect(mapStateToProps)(Header);