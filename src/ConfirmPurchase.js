import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Button} from 'antd';

class ConfirmPurchase extends Component {
    
        onToken = (token) => {
            fetch('/save-stripe-token', {
                method: 'POST',
                body: JSON.stringify(token),
            }).then(response => {
                response.json().then(data => {
                    alert(`Pleasure working with you, ${data.email}`);
                });
            });
        }
    
        //pass the amount property to the axios
        render(){
            return (
                <StripeCheckout
                    token = {this.onToken}
                    stripeKey="pk_live_SQT4BK0fXRFXZLRa51oUBXpO"
                    name = "Brian Kinnes"
                    description = "Your Purchase"
                    panelLabel="Pay Brian"
                    //Set the amount based on the amount in the cart
                    amount={1}
                    currency="USD"
                    shippingAddress
                    billingAddress
                    zipCode
                    >
                    <Button className="cartButtons" size="default">Checkout</Button>
                </StripeCheckout>
            )
        }
    }
    
    export default ConfirmPurchase;