import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {InputNumber, Button} from 'antd';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/"
;

class StoreBKShirt extends Component {
    render(){
        const size = 'normal';
        return (
            <div>
            <h1 className="storeFront"><i><Link to = "/store/">Store</Link></i></h1>
            <div>
            <Link to = "/store/cart/">
            <FaShoppingCart className="cartIcon" size={31}/>
            </Link>
            </div>
             <img className="shirtFull" src="https://res.cloudinary.com/benjidurden/image/upload/v1505946146/shirt_v4_dichtv.png" alt="Support Brian Kinnes" />
             <div className = "itemInfo">
             <h3 className="itemHeader">Support Brian Kinnes Shirt</h3>
             <p className = "itemSpecifics"><i>Printed on tagless Champion t-shirt. 100% cotton. Designed by Brian Kinnes. Expect 2-3 weeks for Shipping.</i></p>
             {/* Size Chart */}
             <form>
             <label>Quantity:</label>
             <InputNumber min={1} max={10} defaultValue={1} />
             <Button size={size}>Add To Cart</Button>
             </form>
             </div>
            </div>
        )
    }
}

export default StoreBKShirt;