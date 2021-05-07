import React, { Component } from 'react';

class ItemsInCart extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h6>{this.props.product.title}</h6>
                <p>{this.props.product.quantity}</p>

                <button className="btn btn-sm btn-danger">Remove</button>
            </div>
         );
    }
}
 
export default ItemsInCart;