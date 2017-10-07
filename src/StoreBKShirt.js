import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button, Radio} from 'antd';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/"
;

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

    handleChange = (e, value) => {
    this.setState({value: e.target.value});
    console.log(this.state.value);
    }

    pushShirt = (e, value) => {
    e.preventDefault();
    console.log("Your shirt size is " + this.state.value);
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
            <RadioGroup id="sizeSelect" onChange={this.handleChange} defaultValue="Small">
              <RadioButton value="Small">Small</RadioButton>
              <RadioButton value="Medium">Medium</RadioButton>
              <RadioButton value="Large">Large</RadioButton>
              <RadioButton value="XL">XL</RadioButton>
            </RadioGroup>
             <Button size={size} onClick={this.pushShirt}>Add To Cart</Button>
             </form>
             </div>
            </div>
        )
    }
}

export default StoreBKShirt;