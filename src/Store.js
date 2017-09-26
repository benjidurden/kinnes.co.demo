import React, {Component} from 'react';

class Store extends Component {
    render(){
        return (
            <div>
             <h1 id="storeFront">Store</h1>
             <h3 className="itemHeader">Photo Prints</h3>
            {/* Image will go here. The buttons will add the items to the cart. Should I add things to a cart, if there's two buttons? Isn't that worthless? Shouldn't they just both be paypal redirects?*/}
            <img  className="prints" src="https://res.cloudinary.com/benjidurden/image/upload/v1505945857/DJkqrrPVwAAtDzm_vlsgbf.jpg" alt="Prints" />
             <p><i>1 of 1 4x6 prints (1 print of each photo currently exists). Each purchase will get a mix of old and new work. Each photo will have a hand written description and signature on the back.</i></p>
             <form>
             <label>Amount of Prints:</label>
            <select>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
             <button>Add To Cart</button>
             </form>
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

export default Store;