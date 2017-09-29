import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//Remove the react <Link> tag and do a Redirect onclick?

class Store extends Component {
    render(){
        return (
            <div>
            <h1 className="storeHead"><i><Link to = "/store/">Store</Link></i></h1>
             <div id = "allItemWrapper">
             <div className="itemContainer">
             <Link to = "/store/prints/">
             <img className="prints mainPage" src="https://res.cloudinary.com/benjidurden/image/upload/v1505945857/DJkqrrPVwAAtDzm_vlsgbf.jpg" alt="Prints" />
             <div className = "textWrapper">
             <div className="text">
             Placeholder Text
             </div>
             </div>
             </Link>
             </div>
             <div id = "spacing">
             </div>
             <div className="itemContainer">
            <Link to = "/store/support-bk-shirt/">
             <img className="shirt-pic mainPage" src="https://res.cloudinary.com/benjidurden/image/upload/v1505946146/shirt_v4_dichtv.png" alt="Support Brian Kinnes" />
             <div className = "textWrapper">
             <div className="text">
             Placeholder Text
             </div>
             </div>
             </Link>
             </div>
             </div>
            </div>
        )
    }
}

export default Store;