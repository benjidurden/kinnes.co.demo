import React, {Component} from 'react';

class StoreBKShirt extends Component {
    render(){
        return (
            <div>
            <p>Support BK shirt content goes here</p>
            <h3 className="itemHeader">Support Brian Kinnes Shirt</h3>
             <img className="shirt-pic" src="https://res.cloudinary.com/benjidurden/image/upload/v1505946146/shirt_v4_dichtv.png" alt="Support Brian Kinnes" />
             <p><i>Printed on tagless Champion t-shirt. 100% cotton. Designed by Brian Kinnes. Expect 2-3 weeks for Shipping.</i></p>
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