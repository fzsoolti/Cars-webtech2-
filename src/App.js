import React, { Component } from 'react';
import Navigation from './components/Navigation';
import Content from './components/Content';
// import AddCar from './components/AddCar';
import Register from './components/Register';
import SignIn from './components/SignIn';


class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState({isSignedIn: false});
    } else if (route === 'home'){
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  render(){
    const { isSignedIn, route } = this.state;
    return (
      <div className="App">

       <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' 
          ?
            <Content />
          : (
              route === 'signin'
              ? <SignIn onRouteChange={this.onRouteChange}/>  
              : <Register onRouteChange={this.onRouteChange} />
          )
      }
      </div>
    );
  }

}

export default App;
