import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Radio, Select} from 'antd';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/"
;
import storage from './storage';

const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function onChange(e) {
    console.log(`radio checked: ${e.target.value}`)
}

class StoreBKShirt extends Component {
    constructor(props){
        super(props);
    this.state = {
        value: "",
    }
    this.pushShirt = this.pushShirt.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (value) => {
    this.setState({value: value});
    }

    pushShirt = (e, value) => {
    e.preventDefault();
    storage.shirtSize = this.state.value;
    console.log("Your shirt size is " + storage.shirtSize);
    storage.hasShirtInCart = true;
    console.log("Do you have shirts in your cart? The answer is " + storage.hasShirtInCart);
    }

    render(){
        const size = 'default';
        return (
            <div>
            <h1><i><Link className="homeHead" to = "/">Home</Link></i></h1>
            <h1><i><Link className="storeFront" to = "/store/">Store</Link></i></h1>
            <div>
            <Link to = "/store/cart/">
            <FaShoppingCart id="supportBK" className="cartIcon" size={31}/>
            </Link>
            </div>
             <img className="shirtFull" src="https://res.cloudinary.com/benjidurden/image/upload/v1507282288/shirt_front_nn1ek1.png" alt="Support Brian Kinnes" />
             <div className = "itemInfo">
             <h3 className="itemHeader">Support Brian Kinnes Shirt - $ 20</h3>
             <p className = "itemSpecifics"><i>Printed on tagless Champion t-shirt. 100% cotton. Designed by Brian Kinnes. Expect 2-3 weeks for Shipping.</i></p>
             {/* Size Chart */}
            <form>
            <label htmlFor="sizeSelect">Size: </label>
            <Select id="sizeSelect" style={{width: 120}} onChange={this.handleChange}>
                <Option value="Small">Small</Option>
                <Option value="Medium">Medium</Option>
                <Option value="Large">Large</Option>
                <Option value="XL">XL</Option>
            </Select>
             <Button size={size} onClick={this.pushShirt}>Add To Cart</Button>
             </form>
             </div>
            </div>
        )
    }
}

export default StoreBKShirt;