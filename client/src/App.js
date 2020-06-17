import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

//check for token
if(localStorage.jwtToken){
  //set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  //set ser and isauthendicated
  store.dispatch(setCurrentUser(decoded));
}


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container" >
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
