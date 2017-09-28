import React, {Component} from 'react';

class StoreBKPrints extends Component {
    render(){
        return (
            <div>
            <p>
            BK Print Content goes here
            </p>
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
            </div>
        )
    }
}

export default StoreBKPrints;