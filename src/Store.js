import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/";

class Store extends Component {
    render(){
        return (
           <div>
            <h1><Link to = "/">Home</Link></h1>
            <h1 className="storeHead"><i><Link to = "/store/">Store</Link></i></h1>
            <Link to = "/store/cart/">
            <FaShoppingCart className = "cartIcon" size={31}/>
            </Link>
            <div className="space">
            </div>
             <div id="container1" className = "itemContainer">
             <Link to = "/store/prints/">
             <img className="prints" src="https://res.cloudinary.com/benjidurden/image/upload/v1505945857/DJkqrrPVwAAtDzm_vlsgbf.jpg" alt="Prints" />
             </Link>
             </div>
             <p id = "storeDesc">Photo Prints - <b>$ 20</b></p>
             <div id="container2" className = "itemContainer">
             <Link to = "/store/support-bk-shirt/">
             <img className="shirt-pic" src="https://res.cloudinary.com/benjidurden/image/upload/v1505946146/shirt_v4_dichtv.png" alt="Support Brian Kinnes" />
             </Link>
             </div>
             <p id = "storeDesc2">Support Brian Kinnes Shirt - <b>$ 30</b></p>
            </div>
        )
    }
}

export default Store;