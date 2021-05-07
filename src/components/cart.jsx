import React, { Component } from 'react';
import { connect } from "react-redux";
import { addToCart } from "../store/actions";
import ItemsInCart from './productInCart';

class Cart extends Component {
    state = {}
    render() {
        return (
            <div className="cart-page">
                <h3>Ready to checkout?</h3>

                <div className="total-container"> 
                    <h5>Your total: {this.getTotal()}</h5>
                        <button className="btn btn-xl btn-primary">Pay now</button>
                    
                </div>

                <div className="toDoList">
                    {this.props.cart.map((prod, index) => (
                        <ProductInCart product={prod} key={index}></ProductInCart>
                    ))}
                </div>

            </div>
        );
    }

    getTotal =() => {
        total = "";
    }

    removeFromCart = () => {
        console.log("Remove from cart pressed")
        // to remoev the product from the cart you need to use the id in the payload
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

export default connect(mapStateToProps, { addToCart })(Cart);
// need to add image, calculate the total, and the remove button
// need to add a new componenet and pass it the data 
// the payload for the update reducer you put in an array and array filter like we do in the todo for logic to remove items
// we have to figure out how to do the remove, we wont be giver the solution
// need to calculate the total in the car tcomponent 
