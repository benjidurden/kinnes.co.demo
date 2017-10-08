import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/";

class Store extends Component {
    render(){
        return (
           <div>
            <h1><Link className="homeHead" to = "/"><i>Home</i></Link></h1>
            <h1><i><Link className="storeHead" to = "/store/">Store</Link></i></h1>
            <Link to = "/store/cart/">
            <FaShoppingCart id="cartOnStore" className = "cartIcon" size={31}/>
            </Link>
            <div className="space">
            </div>
            <div className = "mainContainer">
             <div id="container1" className = "itemContainer">
             <Link to = "/store/prints/">
             <img className="prints main" src="https://res.cloudinary.com/benjidurden/image/upload/v1507282301/prints_front_rlexvr.png" alt="Prints" />
             </Link>
             </div>
             <div id="container2" className = "itemContainer">
             <Link to = "/store/support-bk-shirt/">
             <img className="shirt-pic main" src="https://res.cloudinary.com/benjidurden/image/upload/v1507282288/shirt_front_nn1ek1.png" alt="Support Brian Kinnes" />
             </Link>
             </div>
             </div>
            </div>
        )
    }
}

export default Store;