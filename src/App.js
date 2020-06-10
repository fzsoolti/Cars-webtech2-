import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Content from './components/Content';
import AddCar from './components/AddCar';
import data from "./data.json";


class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render(){
    return (
      <Router>
      <div className="App">
       <Navigation />
       <Route exact path="/" render={props => (
        <Content data={data}/>
       ) } />
       <Route path="/addcar" render={props => (
         <AddCar />
       ) } />

      </div>
      </Router>
    );
  }

}

export default App;
