import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Photo from './Photo.js';
import Film from './Film.js';
import Store from './Store.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/photo/' component = {Photo} />
        <Route exact path = '/film/' component = {Film} />
        <Route exact path = '/store/' component = {Store} />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
