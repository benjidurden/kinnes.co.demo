import React, {Component} from 'react';
import {Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';

class StoreBKPrints extends Component {
    render(){
        return (
            <div>
            <h1 className="storeFront"><i><Link to = "/store/">Store</Link></i></h1>
            <h3 className="itemHeader">Photo Prints</h3>
           {/* Show current Breadcrumb? */}
            <Breadcrumb>
              <Breadcrumb.Item><b>Home</b></Breadcrumb.Item>
              <Breadcrumb.Item><b>Store</b></Breadcrumb.Item>
              <Breadcrumb.Item><b>Photo Prints</b></Breadcrumb.Item>
            </Breadcrumb>
            <img  className="prints" src="https://res.cloudinary.com/benjidurden/image/upload/v1505945857/DJkqrrPVwAAtDzm_vlsgbf.jpg" alt="Prints" />
             <p><i>1 of 1 4x6 prints (1 print of each photo currently exists). Each purchase will get a mix of old and new work. Each photo will have a hand written description and signature on the back.</i></p>
             <form>
             <label>Quantity: </label>
            <select>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
             <button>Add To Cart</button>
             </form>
            </div>
        )
    }
}

export default StoreBKPrints;