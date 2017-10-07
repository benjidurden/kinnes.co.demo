import React, {Component} from 'react';
import Table from 'rc-table';
import Animate from 'rc-animate';
import {Link} from 'react-router-dom';
import FaShoppingCart from "react-icons/lib/fa/shopping-cart/";
import {InputNumber, Button, Modal, Input, Radio, Menu, Dropdown, Icon} from 'antd';
import 'rc-table/assets/index.css';
import 'rc-table/assets/animation.css';
import StripeCheckout from 'react-stripe-checkout';
import ConfirmPurchase from './ConfirmPurchase.js';
import axios from 'axios';

// if(a == "Support Brian Kinnes Shirt"){}
// if (a == 'Support Brian Kinnes Shirt'){
//     <a href={this.link.shirt}>Shirt</a>
//     }
//     else if(a == 'Photo Prints'){
//     <a href={this.link.prints}>Prints</a>
//     }
        {/* <a href = {this.changeLink}>{this.state.data[parseInt(key)].a}</a>, */}

// var itemData = this.state.data;

const onClick = function ({key}) {
    console.log(`You clicked on ${key}`);
}

const menu = (
  <Menu onClick={onClick}>
    <li><Menu.Item key="Small">Small</Menu.Item></li>
    <li><Menu.Item key="Medium">Medium</Menu.Item></li>
    <li><Menu.Item key="Large">Large</Menu.Item></li>
    <li><Menu.Item key="XL">XL</Menu.Item></li>
  </Menu>

)

class CartExample extends Component {
    constructor(props){
        super(props);
    this.handleLinks = this.handleLinks.bind(this);
    this.link = {
        shirt: "/store/support-bk-shirt/",
        prints: "/store/prints/"
    };
    // Product, Price, Quantity, Remove, Total
    this.columns = [
        {title: 'Product', dataIndex: 'a', key: 'a', width: 200,
        render:(text, record, key) =>
        <a onClick={this.handleLinks}>{this.state.data[parseInt(key)].a}</a>,
        },
        {title: 'Size', dataIndex: 'b', key: 'b', width: 200,
        render:(text, record) =>
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link">
                Pick a size <Icon type="down" />
            </a>
        </Dropdown>
        },
        {title: 'Price', dataIndex: 'b', key: 'b', width: 200},
        {title: 'Quantity', dataIndex: 'c', key: 'c', width: 200,
        render:(text, record) =>
        <InputNumber onChange={this.handleAmount} defaultValue = {1} />
        },
        {title: 'Remove', dataIndex: '', key: 'd',
        render:(text, record) => 
        <a onClick={e => this.onDelete(record.key, e)}>Delete</a>
        },
    ];
    this.state = {
    data: [
        {a: 'Support Brian Kinnes Shirt', b: '$ ' + 20, c:1, key: '0'},
        {a: 'Photo Prints', b: 10, c:2, key:'1'},
    ],
    testData:[],
    size: 'default',
    decideMin: '',
    decideDefault: '',
    visible: false,
    confirmLoading: false,
    buttonFirstClick: true,
    amount: 0,
    fullName: '',
    value: 0,
    };
    }

    getBodyWrapper(body){
    return (
        <Animate transitionName="move" component="tbody" className={body.props.className}>
        {body.props.children}
        </Animate>
    );
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
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({visible: false});
    }

    handleAmount = (value) => {
        this.setState({value: value}),
        console.log(value);
    }

    onDelete = (key, e) => {
    console.log('Delete', key);
    e.preventDefault();
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({data});
    };

    fixSite = (e, key, value) => {
        e.preventDefault();
        this.setState({
        value: this.state.value,
        size: '',
        });
        console.log("Your desired value is " + this.state.value);
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

    handleLinks(event) {
        let textInfo = event.currentTarget.textContent;
        if(textInfo === "Support Brian Kinnes Shirt"){
            this.props.history.push('/store/support-bk-shirt/');
        }
        if(textInfo === "Photo Prints"){
            this.props.history.push('/store/prints/');
        }
    }

    // modifyDefault(event){
    // for (var i = 0; i < columns. length; i++){
    //     console.log(this.columns);
    // }
    /*
        let rowText
        if(rowText === "Support Brian Kinnes Shirt"){
        //Modify the quantity accordingly
        //if this.columns[i].title
        }
        if(rowText === "Photo Prints"){
        //Modify the quantity accordingly
        }
    */

    // modifyDefault = (event, key) => {
    // let rowText = this.state.data[parseInt(key)].a;
    // let rawNumber = parseInt(this.state.decideMin);
    // if(rowText === "Support Brian Kinnes Shirt"){
    // this.setState({decideMin: rawNumber});
    // console.log(this.state.decideMin);
    // }
    // let rowText = event.currentTarget.textContent;
    // if(rowText === "Support Brian Kinnes Shirt"){
    //     console.log("Brian's shirt row");
    // }

    render(){
    var stripe_checkout_init = null;
    var checkButtonClass = this.state.buttonFirstClick;
    if (checkButtonClass === false){
    stripe_checkout_init = <ConfirmPurchase amount={this.state.amount} />
    }

    //Checking if array is empty to pass content to it
    var arrayStatus = this.state.testData;
    if (arrayStatus.length === 0){
        console.log("This array is empty!");
    } else {
        console.log("Hey! There's stuff in here!")
    }
    let total;
    let calculateTotal = <p>{total}</p>;
    let stripetotal;
    

        return (
            <div>
               <h1><Link to = "/">Home</Link></h1>
               <h1 className="storeHead"><i><Link to = "/store/">Store</Link></i></h1>
               <FaShoppingCart className = "cartIcon" size={31}/>
               <h2 className="storeHead"><i>Your Cart</i></h2>
                <Table
                columns={this.columns}
                data={this.state.data}
                getBodyWrapper={this.getBodyWrapper}
                emptyText="Your cart's currently empty."
                />
                <br />
                <Button className="cartButtons" size={this.state.size} onClick={this.fixSite}>Update Cart</Button>
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

export default CartExample;