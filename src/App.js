import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Content from './components/Content';
import data from "./data.json";


class App extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render(){
    return (
      <div className="App">
       <Navigation />
       <Content data={data}/>
        
      </div>
    );
  }

}

export default App;
