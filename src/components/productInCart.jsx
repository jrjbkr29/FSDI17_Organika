import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeFromCart } from "../store/actions";


class ProductInCart extends Component {
    state = { img: "Images/products/" + this.props.img }//this.props.cart[this.props.image].image }
    render() {
        return (
            <div>
                <h6>Total: ${this.props.product.itemTotal.toFixed(2)}</h6>
                <p><img src={this.state.img} alt="Product" /></p>
                <p>{this.props.product.quantity}</p>

                <button onClick={() => { this.removeFromCart(this.props.id) }} className="btn btn-sm btn-danger">Remove</button>
            </div>
        );
    }

    removeFromCart = (index) => {
        console.log(index)
        this.props.removeFromCart(index)
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        total: state.total
    }
};
export default connect(mapStateToProps, { removeFromCart })(ProductInCart);