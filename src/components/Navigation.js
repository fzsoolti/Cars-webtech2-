/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    if (true) {
      return (
              <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
              <Link to='/' style={{ textDecoration: 'none' }}><a className="navbar-brand text-danger">Autó nyilvántartó</a></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to='/' style={{ textDecoration: 'none' }}><a className="nav-link" >Autók listája <span className="sr-only"></span></a></Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/addcar' style={{ textDecoration: 'none' }}><a className="nav-link" >Hozzáadás</a></Link>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <a className="nav-link" >Kijelentkezés</a>
                  </li>
                </ul>
              </div>
            </nav>
      );
  } else {
      return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
            <a style={{cursor:'pointer'}} className="navbar-brand ">Nyilvántartó</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                 <Link to='/register' ><a className="nav-link" >Regisztráció</a></Link>
              </li>
              <li className="nav-item">
                  <Link to='/' ><a className="nav-link" >Bejelentkezés</a></Link>
              </li>
              </ul>
            </div>
          </nav>
      );
  }
}

export default Navigation;