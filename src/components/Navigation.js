/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
              <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" >
              <a style={{cursor:'pointer'}} className="navbar-brand ">Nyilvántartó</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a style={{cursor:'pointer'}} className="nav-link" >Autók listája <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a onClick={() => onRouteChange('addcar')} style={{cursor:'pointer'}} className="nav-link" >Hozzáadás</a>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <a onClick={() => onRouteChange('signout')} style={{cursor:'pointer'}} className="nav-link" >Kijelentkezés</a>
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
                    <a onClick={() => onRouteChange('register')} style={{cursor:'pointer'}} className="nav-link" >Regisztráció</a>
                </li>
                <li className="nav-item">
                    <a onClick={() => onRouteChange('signin')} style={{cursor:'pointer'}} className="nav-link" >Bejelentkezés</a>
                </li>
              </ul>
            </div>
          </nav>
      );
  }
}

export default Navigation;