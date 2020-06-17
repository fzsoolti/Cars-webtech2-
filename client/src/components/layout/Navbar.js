import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';

class Navbar extends Component {

    onLogoutClick(e){
        e.preventDefault();
        this.props.logoutUser();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='#' onClick={this.onLogoutClick.bind(this)} className="nav-link">Kijelentkezés</Link>
                        </li>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/register' className="nav-link" >Regisztráció</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-link" >Bejelentkezés</Link>
                        </li>
            </ul>
        );

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <Link to='/' className="navbar-brand text-danger">Autó nyilvántartó</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Navbar);