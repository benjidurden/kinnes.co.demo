import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Store extends Component {
    render(){
        return (
            <div>
             <h1 id="storeFront"><i>Store</i></h1>
             <div id="printContainer">
             <Link to = "/store/prints">
             <img  className="prints" src="https://res.cloudinary.com/benjidurden/image/upload/v1505945857/DJkqrrPVwAAtDzm_vlsgbf.jpg" alt="Prints" />
             </Link>
             </div>
             <div id="shirtContainer">
             <Link to = "/store/support-bk-shirt/">
             <img className="shirt-pic" src="https://res.cloudinary.com/benjidurden/image/upload/v1505946146/shirt_v4_dichtv.png" alt="Support Brian Kinnes" />
             </Link>
             </div>
            </div>
        )
    }
}

export default Store;