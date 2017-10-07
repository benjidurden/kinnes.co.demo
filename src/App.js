import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Store from './Store.js';
import ShoppingCart from './ShoppingCart.js';
import StoreBKShirt from './StoreBKShirt.js';
import StoreBKPrints from './StoreBKPrints.js';
import CartExample from './CartExample.js';
import axios from 'axios';
import ConfirmPurchase from './ConfirmPurchase.js';
import NewCart from './NewCart.js';

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
        <Route exact path = '/store/' component = {Store} />
        <Route exact path = '/store/prints/' component = {StoreBKPrints} />
        <Route exact path = '/store/support-bk-shirt/' component = {StoreBKShirt} />
        <Route exact path = '/store/cart/' component = {CartExample} />
        <Route exact path = "/store/confirm" component = {ConfirmPurchase} />
        <Route exact path = "/shoppingcart/" component = {ShoppingCart} />
        <Route exact path = "/newcart/" component={NewCart} />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
