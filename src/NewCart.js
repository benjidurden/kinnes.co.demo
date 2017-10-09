import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {InputNumber, Button, Modal, Input, Radio, Menu, Dropdown, Icon, Alert} from 'antd';
import ConfirmPurchase from './ConfirmPurchase';
import storage from './storage';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/";
import EmptyCart from './EmptyCart.js';
//After cart image - what comes next?

class NewCart extends Component {

    //componentdidmount that sets cart value

    constructor(props){
        super(props);
    this.state = {
        value: 0,
        //Different values for shirt and print, retweak this in a sec.
        printValue: 0,
        shirtValue: 0,
        name: "Marcus",
        shirtSize: "",
        //change these states
        visible: false,
        visible2: false,
        confirmLoading: false,
        buttonFirstClick: true,
    }
    this.handleChange = this.handleChange.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.removePrints = this.removePrints.bind(this);
    this.changePrints = this.changePrints.bind(this);
    this.changeShirts = this.changeShirts.bind(this);
    this.removeShirts = this.removeShirts.bind(this);
    this.changeCart = this.changeCart.bind(this);
    this.finishUpdate = this.finishUpdate.bind(this);
    }

    //When a single item is in the cart
    removeItem = () => {
        if(storage.hasShirtInCart){
        storage.hasShirtInCart = false;
        storage.shirts = 0;
        storage.shirtSize = "";
        this.props.history.push('/store/cart/');
        }
        else if(storage.hasPrintsInCart){
        storage.hasPrintsInCart = false;
        storage.prints = 0;
        this.props.history.push('/store/cart/');
        }
        else {
            console.log("Nothing to remove");
        }
    }

    //when both items are in the cart
    removePrints = () => {
    if(storage.hasPrintsInCart && storage.hasShirtInCart){
        console.log("Removing prints!");
        storage.hasPrintsInCart = false;
        storage.prints = 0;
        this.props.history.push('/store/cart/');
    }
    }

    removeShirts = () => {
        if(storage.hasPrintsInCart && storage.hasShirtInCart){
        console.log("Removing shirts!");
        storage.hasShirtInCart = false;
        storage.shirts = 0;
        storage.shirtSize = "";
        this.props.history.push('/store/cart/');
        }
    }

    handleChange = (value) => {
        this.setState({value: value}),
        console.log(value);
    }

    // changeCart = (e, value, printAmount) => {
    // if(storage.hasShirtInCart){
    // e.preventDefault();
    // storage.shirts = this.state.value;
    // console.log(storage.shirts);
    // this.props.history.push('/store/cart/');
    // }
    // else if (storage.hasPrintsInCart){
    // e.preventDefault();
    // // storage.prints = this.state.value;
    // storage.prints = this.state.value;
    // console.log(storage.prints);
    // this.props.history.push('/store/cart/');
    // }
    // else if (storage.hasPrintsInCart && storage.hasShirtInCart){
    // e.preventDefault();
    // this.props.history.push('/store/cart/');
    // storage.prints = this.state.value;
    // storage.shirts = this.state.value;
    // }
    // }

    changeCart = () => {
        if(storage.hasPrintsInCart){
            this.changePrints();
            console.log("Print changeCart worked!");
        }
        else if(storage.hasShirtInCart){
            this.changeShirts();
            console.log("Shirt changeCart worked!");
        }
        else if (storage.hasPrintsInCart && storage.hasShirtInCart){
        this.changePrints();
        console.log("Push 1");
        }
    }

    finishUpdate = () => {
        this.changeShirts();
        console.log("Push 2");
    }

    changePrints = (value) => {
        if (storage.hasPrintsInCart){
            storage.prints = this.state.value;
            console.log(storage.prints);
            this.props.history.push('/store/cart/');
        }
    }

    changeShirts = (value) => {
        if(storage.hasShirtInCart){
         storage.shirts = this.state.value;
         console.log(storage.shirts);
         this.props.history.push('/store/cart/');
         }
    }

    showModal = () => {
        this.setState({visible: true});
    }

    showUpdateModal = () => {
        this.setState({visible: true});
    }

    handleOk = (e, key) => {
        e.preventDefault();
        this.state.shirtSize = storage.shirtSize;
        let printCheck = storage.hasPrintsInCart;
        let shirtCheck = storage.hasShirtInCart
        console.log("Surprise! Your shirt size is " + storage.shirtSize);
        this.setState({confirmLoading: true});
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
                buttonFirstClick: false,
            });
        }, 2000);

        if(printCheck){
        axios.post('https://kinnesmailer.herokuapp.com/contact/send/', {
            //Parameters
          name: this.state.name,
          printAmount: storage.prints,
          shirtAmount: 0,
          shirtSize: "N/A"
        })
        //   printAmount: storage.prints,
        // THIS WORKS!  shirtAmount: this.state.value,
        //   shirtSize: storage.shirtSize,
        .then(function (response){
            console.log(response);
            console.log("Axios print!");
        })
        .catch (function (error) {
            console.log(error);
        })
    }

    if(shirtCheck){
        axios.post('https://kinnesmailer.herokuapp.com/contact/send/', {
            //Parameters
          name: this.state.name,
          printAmount: 0,
          shirtAmount: this.state.value,
          shirtSize: "N/A",
        })
        //   printAmount: storage.prints,
        // THIS WORKS!  shirtAmount: this.state.value,
        //   shirtSize: storage.shirtSize,
        .then(function (response){
            console.log(response);
            console.log("Axios shirt!");
        })
        .catch (function (error) {
            console.log(error);
        })
    }

       if(printCheck && shirtCheck){
        axios.post('https://kinnesmailer.herokuapp.com/contact/send/', {
            //Parameters
          name: this.state.name,
          printAmount: storage.prints,
          shirtAmount: this.state.value,
          shirtSize: "N/A"
        })
        //   printAmount: storage.prints,
        // THIS WORKS!  shirtAmount: this.state.value,
        //   shirtSize: storage.shirtSize,
        .then(function (response){
            console.log(response);
            console.log("axios both!");
        })
        .catch (function (error) {
            console.log(error);
        })
    }

      //End of listener
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
        
        //Price null values - finished!
        var shirtPrice = null;
        var printPrice = null;


        var subTotalPrice = null;
        //shippingPrice done
        var shippingPrice = null;

        //setting cart render
        var cartRender = null;

        //Conditional to set default quantity and total in render;
        var setDefault = null;

        //Using storage to render the right carts
        if (storage.hasShirtInCart && storage.hasPrintsInCart){
        console.log("You'd like to purchase some shirts and prints");
        //If the shirt and print are in the cart, set the shippingPrice to $7.
        printPrice = storage.prints * 10;
        shirtPrice = storage.shirts * 20;
        shippingPrice = 7;
        subTotalPrice = printPrice + shirtPrice;

        //DefaultFix
        if (storage.prints === 0 && printPrice === 0){
            this.props.history.push('/store/cart/');
            storage.prints = 2;
            printPrice = storage.prints * 10;
            subTotalPrice += printPrice;
        }

        if (storage.shirts === 0 && shirtPrice === 0){
            this.props.history.push('/store/cart/');
            storage.shirts = 1;
            shirtPrice = storage.shirts * 20;
            subTotalPrice += shirtPrice;
        }

        cartRender = 
        <div>
        <h1><Link className="homeHead" to = "/"><i>Home</i></Link></h1>
        <FaShoppingCart id="newCartIcon" className = "cartIcon" size={31}/>
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
            <p className="itemSize">{storage.shirtSize}</p>
            <p className="itemRemover" onClick={this.removeShirts}>Remove</p>
            </div>
            <div className="col-sm-3">
                <InputNumber min={1} max={10} defaultValue={storage.shirts} onChange={this.handleChange} />
                <Button size="default" onClick={this.changeShirts}>Update Total</Button>
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
            <p className="itemRemover" onClick={this.removePrints}>Remove</p>
            </div>
            <div className="col-sm-3">
                <InputNumber min={2} max={10} defaultValue={storage.prints} onChange={this.handleChange} />
                <Button size="default" onClick={this.changePrints}>Update Total</Button>
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
        <p id="subTotal" className="costContainer totals">
            <label htmlFor="subTotal">SubTotal:   </label>
            <b><span>$</span>{subTotalPrice}</b></p>
        <p id="shipping" className="costContainer totals">
            <label htmlFor="shipping">Shipping: </label>
            <b><span>$ </span>{shippingPrice}</b></p>
        </div>
        {/* Cart Info. Pass price to confirmPurchase onclick */}
        {/* <Button size="default" onClick={this.changeCart}>Update Cart</Button> */}
        <Button className={this.state.buttonFirstClick ? "cartButtons": "hideModal"} size={this.state.size} onClick={this.showModal}>
            Checkout
            </Button>
            {stripe_checkout_init}
            {/* Modal for both */}
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
           <br />
        <p>Just a failsafe! Please put in your full name, followed by your shirt size after typing this, like
            <br />
            ex. Nolan North XL
            <br />
            If you don't include your full name and size , your order won't be processed.
            <br />
            After this is done - you may hit the checkout button again and finish your order!
        </p>
        </Modal>
            {/* Update Modal */}
        </div>
        }
        else if (storage.hasPrintsInCart){
        console.log("You'd like to only purchase a print");
        printPrice = storage.prints * 10;
        //Shipping Cost for prints is $3
        shippingPrice = 3;
        subTotalPrice = printPrice;

        //Default fix

        if (storage.prints === 0 && printPrice === 0){
        storage.prints = 2;
        printPrice = storage.prints * 10;
        subTotalPrice += printPrice;
        }

        cartRender = <div>
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
                    <InputNumber min={2} max={10} defaultValue={storage.prints}  onChange={this.handleChange} />
                    <Button size="default" onClick={this.changePrints}>Update Total</Button>
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
            <p id="subTotal" className="costContainer totals">
                <label htmlFor="subTotal">SubTotal:   </label>
                <b><span>$</span>{subTotalPrice}</b></p>
            <p id="shipping" className="costContainer totals">
                <label htmlFor="shipping">Shipping: </label>
                <b><span>$ </span>{shippingPrice}</b></p>
            </div>
            {/* Cart Info. Pass price to confirmPurchase onclick */}
            {/* <Button size="default" onClick={this.changeCart}>Update Cart</Button> */}
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
            <p>Just a failsafe! Hit the Checkout button again after you type your name in.</p>
            </Modal>
        </div>
        }
        else if(storage.hasShirtInCart){
        console.log("You'd like to only purchase a shirt");
        shirtPrice = storage.shirts * 20;
        subTotalPrice = shirtPrice;
        //Set shippingPrice to 7
        shippingPrice = 7;

        //Default Fix
        if (storage.shirts === 0 && shirtPrice === 0){
            storage.shirts = 1;
            shirtPrice = storage.shirts * 20;
            subTotalPrice += shirtPrice;
        }

        cartRender = <div>
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
                <p className="itemSize">{storage.shirtSize}</p>
                <p className="itemRemover" onClick={this.removeItem}>Remove</p>
                </div>
                <div className="col-sm-3">
                    <InputNumber min={1} max={10} defaultValue={storage.shirts} onChange={this.handleChange} />
                    <Button size="default" onClick={this.changeShirts}>Update Total</Button>
                </div>
                <div className="col-sm-3">
                    <p className="costContainer"><b><span>$</span>{shirtPrice}
                    </b></p>
                </div>
            </div>
            <div className="row borderRow">
            {/* an HR then a subtotal, shipping, update cart and checkout */}
            {/* How much spacing is necessary? I think that two 4-sized columns would work, followed by the payment buttons. */}
            <p id="subTotal" className="costContainer totals">
                <label htmlFor="subTotal">SubTotal:   </label>
                <b><span>$</span>{subTotalPrice}</b></p>
            <p id="shipping" className="costContainer totals">
                <label htmlFor="shipping">Shipping: </label>
                <b><span>$ </span>{shippingPrice}</b></p>
            </div>
            {/* Cart Info. Pass price to confirmPurchase onclick */}
            {/* <Button size="default" onClick={this.changeCart}>Update Cart</Button> */}
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
            {/* Modal Shirt Single */}
            <br />
        <p>Just a failsafe! Please put in your full name, followed by your shirt size after typing this, like
            <br />
            ex. Nolan North XL
            <br />
            If you don't include your full name and size , your order won't be processed.
            <br />
            After this is done - you may hit the checkout button again and finish your order!
        </p>
            </Modal>
        </div>
        }
        //Default, if the cart is empty pass this 
        else {
        console.log("You want to purchase nothing");
        cartRender = <EmptyCart />
        }

        return (
            <div className="container">
            {cartRender}
            </div>
        )
    }
}

export default NewCart;