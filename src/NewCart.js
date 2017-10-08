import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {InputNumber, Button, Modal, Input, Radio, Menu, Dropdown, Icon} from 'antd';
import ConfirmPurchase from './ConfirmPurchase';
import storage from './storage';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/";
//After cart image - what comes next?

class NewCart extends Component {

    //componentdidmount that sets cart value

    constructor(props){
        super(props);
    this.state = {
        value: 0,
        //Different values for shirt and print, retweak this in a sec.
        visible: false,
        confirmLoading: false,
        buttonFirstClick: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.changeCart = this.changeCart.bind(this);
    }

    removeItem = () => {
        console.log("Item removed!");
    }

    handleChange = (value) => {
        this.setState({value: value}),
        console.log(value);
    }

    changeCart = (value) => {
    //get the value of all the items. then, update the value of the total, subtotal, and shipping.
    //Shipping is $3 for prints, $7 for shirts. If the shirt and print are in the car, update the shipping.
    console.log(this.state.value);
    //That's to get the print and shirt value. Now, to update the price.
    //Do I have to do this method in the render instead? Doesn't make much sense to me to do that. idk.
    let printPrice = this.state.value * 10;
    let shirtPrice = this.state.value * 20;
    // subTotalPrice = printPrice + shirtPrice
    //if both the shirt and prints or just the shirt are in the cart - make the shipping $7.
    //else, if only the prints are in the cart, make the shipping $3.
    //this can be done with localStorage, possibly?
    }

    showModal = () => {
        this.setState({visible: true});
    }

    handleOk = (e, key) => {
        this.setState({confirmLoading: true});
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
                buttonFirstClick: false,
            });
        }, 2000);
        //Set this.state.amount equal to the amount of the subtotal plus shipping to Stripe Checkout
        //How do I confirm that confirmpurchase got that amount?
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({visible: false});
    }

    onToken = (token) => {
        fetch('/save-stripe-token', {
            method: 'POST',
            body: JSON.stringify(token),
        }).then(response => {
            response.json().then(data => {
                alert(`Thanks for the purchase, ${data.email}`);
            });
        });
    }

    render(){
        var cartItem = null;
        var shirtSize = null;
        var stripe_checkout_init = null;
        var checkButtonClass = this.state.buttonFirstClick;
        if (checkButtonClass === false){
        stripe_checkout_init = <ConfirmPurchase amount={this.state.amount} />
        }
        
        //Price null values
        var shirtPrice = null;
        var printPrice = null;

        //setting cart render
        var cartRender = null;

        //Using storage to render the right carts
        if (storage.hasShirtInCart && storage.hasPrintsInCart){
        console.log("You'd like to purchase some shirts and prints");
        }
        else if (storage.hasPrintsInCart){
        console.log("You'd like to only purchase a print");
        }
        else if(storage.hasShirtInCart){
        console.log("You'd like to only purchase a shirt");
        }
        //Default, if the cart is empty pass this 
        else {
        console.log("You want to purchase nothing");
        }

        return (
            <div className="container">
            <h1><Link className="homeHead" to = "/"><i>Home</i></Link></h1>
            <FaShoppingCart id="newCartIcon" className = "cartIcon" size={31}/>
            {/* Cart Icon on right */}
            <h2 id="cartIdentifier"><i>Your Cart</i></h2>
            <hr className="hr--small" />
            <div className="row cart_row">
                <div className="col-sm-3">
                    <p className="tableHead" id="quantityDesc"><b>Product</b></p>
                </div>
                <div className="col-sm-3">
                    <p className="tableHead" id="quantityDesc"><b>Info</b></p>
                </div>
                <div className="col-sm-3">
                    <p className="tableHead" id="quantityDesc"><b>Quantity</b></p>
                </div>
                <div className="col-sm-3">
                    <p className="tableHead" id="totalDesc"><b>Total</b></p>
                </div>
                {/* With Bootstrap do all 12 columns have to be used? */}
            </div>
            <br />
            <div className="row item_row">
            {/* Image, followed by item name, description, and remove */}
            {/* This is a test of the two items, more-so myself figuring out what CSS they're going to need when they get rendered */}
                <div className="col-sm-3">
                <img id="cartShirt" src="https://res.cloudinary.com/benjidurden/image/upload/v1507282288/shirt_front_nn1ek1.png" alt="shirtInCart" />
                </div>
                <div className="col-sm-3">
                <Link to = "/store/support-bk-shirt/"> <p className="itemTitle"><i>Support Brian Kinnes Shirt</i></p></Link>
                {/* Shirt size. */}
                <p className="itemSize">SMALL</p>
                <p className="itemRemover" onClick={this.removeItem}>Remove</p>
                </div>
                <div className="col-sm-3">
                    <InputNumber min={2} max={10}  onChange={this.handleChange} />
                </div>
                <div className="col-sm-3">
                    <p className="costContainer"><b><span>$</span>{shirtPrice}
                    </b></p>
                </div>
            </div>
            <div className="row item_row">
                <div className="col-sm-3">
                <img id="cartPrint"
                src="https://res.cloudinary.com/benjidurden/image/upload/v1507282301/prints_front_rlexvr.png"
                alt="printInCart" />
                </div>
                <div className="col-sm-3">
                <Link to = "/store/prints/"><p className="itemTitle"><i>Photo Prints</i></p></Link>
                <p className="itemRemover" onClick={this.removeItem}>Remove</p>
                </div>
                <div className="col-sm-3">
                    <InputNumber min={2} max={10}  onChange={this.handleChange} />
                </div>
                <div className="col-sm-3">
                    <p className="costContainer"><b><span>$</span>
                    {printPrice}
                    </b></p>
                </div>
            </div>
            <br />
            <div className="row borderRow">
            {/* an HR then a subtotal, shipping, update cart and checkout */}
            {/* How much spacing is necessary? I think that two 4-sized columns would work, followed by the payment buttons. */}
            <p id="subTotal" className="costContainer">
                <label htmlFor="subTotal">SubTotal:   </label>
                <b><span>$</span>30</b></p>
            <p id="shipping" className="costContainer">
                <label htmlFor="shipping">Shipping: </label>
                <b><span>$ </span>20</b></p>
            </div>
            {/* Cart Info. Pass price to confirmPurchase onclick */}
            <Button size="default" onClick={this.changeCart}>Update Cart</Button>
            <Button className={this.state.buttonFirstClick ? "cartButtons": "hideModal"} size={this.state.size} onClick={this.showModal}>
                Checkout
                </Button>
                {stripe_checkout_init}
               <Modal
                title="Sure you're not a robot?"
                visible={this.state.visible}
                onOk = {this.handleOk}
                onCancel={this.handleCancel}
                confirmLoading={this.state.confirmLoading}
                okText="Okay"
                cancelText="Cancel"
                 >
            <Input placeholder="Enter your full name" name={this.state.fullName} />
            <p>Just a failsafe! Hit the Checkout button again after you type this in.</p>
            </Modal>
            </div>
        )
    }
}

export default NewCart;