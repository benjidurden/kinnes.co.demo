import React, {Component} from 'react';
import Checkout from './Checkout';

class CheckoutServe extends Component {
    render(){
        return (
            <div>
                <h1>Checkout Test</h1>
                <Checkout
                name={"Brian Kinnes"}
                description={"Your Purchase"}
                amount={.01}
                />
            </div>
        )
    }
}

export default CheckoutServe;