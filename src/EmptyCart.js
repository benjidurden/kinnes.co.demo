import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/";

class EmptyCart extends Component {
    render(){
        return (
            <div>
            <h1><Link to = "/"><i>Home</i></Link></h1>
            {/* Cart Icon on right */}
            <FaShoppingCart id="emptyCartIcon" className = "cartIcon" size={31}/>
            <h2 id="cartIdentifier"><i>Your Cart</i></h2>
            <hr className="hr--small" />
            <p className="fixCart">Your cart is currently empty.
                <br  />
            Continue browing <Link to = "/store/">here.</Link></p>
            </div>
        )
    }
}

export default EmptyCart;