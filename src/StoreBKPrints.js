import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {InputNumber, Button} from 'antd';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/"
;

class StoreBKPrints extends Component {
    render(){
        const size = 'normal';
        return (
            <div>
            <h1><Link to = "/">Home</Link></h1>
            <h1 className="storeFront"><i><Link to = "/store/">Store</Link></i></h1>
            <div>
            <Link to = "/store/cart/">
            <FaShoppingCart className="cartIcon" size={31} />
            </Link>
            </div>
            <img  className="printFull" src="https://res.cloudinary.com/benjidurden/image/upload/v1505945857/DJkqrrPVwAAtDzm_vlsgbf.jpg" alt="Prints" />
            <div className = "itemInfo">
            <h3 className="itemHeader">Photo Prints</h3>
             <p className="itemSpecifics"><i>1 of 1 4x6 prints (1 print of each photo currently exists). Each purchase will get a mix of old and new work. Each photo will have a hand written description and signature on the back.</i></p>
             <form>
             <label>Quantity: </label>
             <InputNumber min={2} max={10} defaultValue={2} />
            {/* <select>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select> */}
              <Button size={size}>Add To Cart</Button>
             </form>
             </div>
            </div>
        )
    }
}

export default StoreBKPrints;