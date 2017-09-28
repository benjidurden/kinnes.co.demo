import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Photo from './Photo.js';
import PhotoFinal from './PhotoFinal.js';
import Film from './Film.js';
import FilmFinal from './FilmFinal.js';
import Store from './Store.js';
import ShoppingCart from './ShoppingCart.js';
import StoreBKShirt from './StoreBKShirt.js';
import StoreBKPrints from './StoreBKPrints.js';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <Switch>
        <Route exact path = '/' component = {Home} />
        {/* This method maps through an array of paths, assigning each endpoint to the same component */}
        {/*RedMercedes and Heebiejeebies will render the photo component. The rest will render the video component.*/}
        {/* Assign a key later on */}
        {["/redmercedes/", "/heebiejeebies/"].map(photos => 
        <Route path={photos} component={Home} key = {photos}/>
        )}
        {["/caroline/", "/myneighbor/", "/wendy/", "/american-boyband/", "/helmet-boy/", "/beauty-salon/"].map(films => 
          <Route path={films} component = {Home} key={films}/>
        )}
        <Route path = '/photo/' component = {Photo} />
        <Route exact path = '/film/' component = {Film} />
        <Route exact path = '/store/' component = {Store} />
        <Route exact path = '/store/prints/' component = {StoreBKPrints} />
        <Route exact path = '/store/support-bk-shirt/' component = {StoreBKShirt} />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
