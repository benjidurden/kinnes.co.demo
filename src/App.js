import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Thoughts from './Thoughts.js';
import Works from './Works.js';
import Contact from './Contact.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/works/' component = {Works} />
        <Route exact path = '/thoughts/' component = {Thoughts} />
        <Route exact path = '/contact/' component = {Contact} />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
