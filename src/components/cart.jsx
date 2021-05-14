import React, { Component } from 'react';
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../store/actions";
import ProductInCart from './productInCart';

class Cart extends Component {
    state = {}
    render() {
        return (
            <div className="cart-page">
                <h3>Ready to checkout?</h3>

                <div className="total-container">
                    <h5>Your total: {parseFloat(this.props.total).toFixed(2)}</h5>
                    <button className="btn btn-xl btn-primary">Pay now</button>

                </div>

                <div className="cart-list">
                    {this.props.cart.map((prod, index) => (
                        <ProductInCart className="item-listsss" product={prod} key={index} id={this.props.cart[index].id} img={"FSDI17_Organika" + this.props.cart[index].image}></ProductInCart>
                    ))}
                </div>

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        total: state.total
    }
};

export default connect(mapStateToProps, { addToCart, removeFromCart })(Cart);
