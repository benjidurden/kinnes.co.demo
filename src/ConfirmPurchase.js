import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Button} from 'antd';
import storage from './storage';

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

            var priceOfPrints = null;
            var priceOfShirts = null;
            var totalCost = null;
            var shipping = null;

            if(storage.hasShirtInCart === true){
                shipping = 7;
            }
            else if (storage.hasPrintsInCart === true){
                shipping = 3;
            }
            else if (storage.hasPrintsInCart === true && storage.hasShirtInCart === true){
                shipping = 7;
            }

            var priceOfPrints = storage.prints * 10;
            var priceOfShirts = storage.shirts * 20;
            var totalCost = priceOfPrints + priceOfShirts + shipping;
            console.log("Total cost is " + totalCost);
            return (
                <StripeCheckout
                    token = {this.onToken}
                    stripeKey="pk_test_W8ELp0NoVyVpoSHKCs81PaxY"
                    name = "Brian Kinnes"
                    description = "Your Purchase"
                    panelLabel="Pay Brian"
                    //Set the amount based on the amount in the cart
                    amount={totalCost}
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