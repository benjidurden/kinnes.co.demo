import React, {Component} from 'react';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/"
;

class StoreBKShirt extends Component {
    render(){
        return (
            <div>
            <h1 className="storeFront"><i><Link to = "/store/">Store</Link></i></h1>
                {/* Show current Breadcrumb? */}
            <Breadcrumb>
            <Breadcrumb.Item><b>Home</b></Breadcrumb.Item>
            <Breadcrumb.Item><b>Store</b></Breadcrumb.Item>
            <Breadcrumb.Item><b>Support Brian Kinnes Shirt</b></Breadcrumb.Item>
            </Breadcrumb>
            <h3 className="itemHeader">Support Brian Kinnes Shirt</h3>
             <img className="shirt-pic" src="https://res.cloudinary.com/benjidurden/image/upload/v1505946146/shirt_v4_dichtv.png" alt="Support Brian Kinnes" />
             <p><i>Printed on tagless Champion t-shirt. 100% cotton. Designed by Brian Kinnes. Expect 2-3 weeks for Shipping.</i></p>
             {/* Size Chart */}
             <form>
             <label>Quantity:</label>
             <select>
             </select>
             <button>Add To Cart</button>
             </form>
            </div>
        )
    }
}

export default StoreBKShirt;