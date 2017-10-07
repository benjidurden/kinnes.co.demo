import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {InputNumber, Button} from 'antd';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/"
;

class StoreBKPrints extends Component {
    constructor(props){
        super(props);
    this.state = {
        value: 0,
    };
    this.pushPrints = this.pushPrints.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (value) => {
        this.setState({value: value}),
        console.log(value);
    }

    pushPrints = (e, value) => {
        e.preventDefault();
        console.log("Your desired value is " + this.state.value);
        this.props.history.push('/store/cart/');
    }

    render(){
        const size = 'default';
        return (
            <div>
            <h1><Link to = "/">Home</Link></h1>
            <h1 className="storeFront"><i><Link to = "/store/">Store</Link></i></h1>
            <div>
            <Link to = "/store/cart/">
            <FaShoppingCart id="printCart" className="cartIcon" size={31} />
            </Link>
            </div>
            <img  className="printFull" src="https://res.cloudinary.com/benjidurden/image/upload/v1507282301/prints_front_rlexvr.png" alt="Prints" />
            <div className = "itemInfo">
            <h3 className="itemHeader">Photo Prints - $ 10</h3>
             <p className="itemSpecifics"><i>1 of 1 4x6 prints (1 print of each photo currently exists). Each purchase will get a mix of old and new work. Each photo will have a hand written description and signature on the back.</i></p>
             <form>
             <label>Quantity: </label>
             <InputNumber min={2} max={10}  onChange={this.handleChange} />
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
              <Button size={size} onClick={this.pushPrints}>Add To Cart</Button>
             </form>
             </div>
            </div>
        )
    }
}

export default StoreBKPrints;