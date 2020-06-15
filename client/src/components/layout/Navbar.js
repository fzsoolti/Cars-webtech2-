import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                <Link to='/' className="navbar-brand text-danger">Autó nyilvántartó</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to='/register' className="nav-link" >Regisztráció</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className="nav-link" >Bejelentkezés</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;