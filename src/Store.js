import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/";

class Store extends Component {
    render(){
        return (
           <div>
            <h2><Link to = "/">Home</Link></h2>
            <h1 className="storeHead"><i><Link to = "/store/">Store</Link></i></h1>
            <Link to = "/store/cart/">
            <FaShoppingCart className = "cartIcon" size={31}/>
            </Link>
             <div className = "itemContainer">
             <img className="prints" src="https://res.cloudinary.com/benjidurden/image/upload/v1505945857/DJkqrrPVwAAtDzm_vlsgbf.jpg" alt="Prints" />
             <Link to = "/store/prints/">
             Photo Prints
             </Link>
             </div>
             <div className = "itemContainer">
             <img className="shirt-pic" src="https://res.cloudinary.com/benjidurden/image/upload/v1505946146/shirt_v4_dichtv.png" alt="Support Brian Kinnes" />
             <Link to = "/store/support-bk-shirt/">
             Support Brian Kinnes Shirt
             </Link>
             </div>
            </div>
        )
    }
}

export default Store;