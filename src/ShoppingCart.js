import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Table, Icon, InputNumber, Button} from 'antd';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/";
const size = "large";

class ShoppingCart extends Component {
    //Conditional rendering. If a store item isn't sent to the cart, render a different view
    constructor(props){
        super(props);
    this.state = {
        size: 'large',
    };
    }
    render(){
    //If the cart is empty, render this view
    //First column will be the respective image of the item
    const columns = [
    {
        title: '',
        dataIndex: 'image',
        key: 'image',
        render: image => <img src = "#" alt="" />
    },
    {
        title: 'Product',
        dataIndex: 'product',
        key: 'product',
        //Use props to capture the shirt link or the prints link and send it to the render
        render: text => <a href ="#">{text}</a>
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'Quantity',
        dataindex: 'quantity',
        key: 'quantity',
        //Pass in the textbox to increase the quantitiy
        render: element => <InputNumber min={2} max={10} defaultValue = {2} />
    },
    {
        title: 'Remove',
        key: 'remove',
        render: text => (
        <span>
        <Button size={this.state.size}>Remove</Button>
        </span>
        ),
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
    }
];
    const data = [{
    key: '1',
    product: 'Support Brian Kinnes Shirt',
    price: '$20',
    quantity: '2',
    total: '$40'
    },
    {
    key: '2',
    product: 'Photo Prints',
    price: '$9',
    quantity: '4',
    total: '$36',
    },
    ];
        return (
            <div>
                <h1><Link to = "/">Home</Link></h1>
                <h1 className="storeHead"><i><Link to = "/store/">Store</Link></i></h1>
                <FaShoppingCart className = "cartIcon" size={31}/>
                <h1>Your Cart</h1>
                <Table columns={columns} dataSource = {data} />
                <Button size={this.state.size}>Update Cart</Button>
                <Button size={this.state.size}>Checkout</Button>
            </div>
        )
    }
}

export default ShoppingCart;