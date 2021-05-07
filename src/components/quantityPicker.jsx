import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/actions";

import "./quantityPicker.css";

class QuantityPicker extends Component {
  state = {
    quantity: this.props.minimum,
    buttonLabel: "Add to cart"
  };
  render() {
    return (
      <div className="qp-page">
        <div>
        <label>Total: ${(this.state.quantity * this.props.price).toFixed(2)}</label>
        </div>
        <button
          id="decrementButton"
          className="btn btn-sm btn-info"
          onClick={this.decrease}
          disabled={this.state.quantity === this.props.minimum}
        >
          -
        </button>
        <label>{this.state.quantity}</label>
        <button
          id="incrementButton"
          className="btn btn-sm btn-info"
          onClick={this.increase}
        >
          +
        </button>

        {this.state.buttonLabel}
        <button className="cartButton" onClick={this.handleAddToCartButton}><i className="fa fa-cart-plus" aria-hidden="true"></i></button>
      </div>
    );
  }

  increase = () => {
    var newQnty = (this.state.quantity + 1);
    console.log("Increase!!");
    this.setState({ quantity: newQnty});
    this.props.onValueChange(newQnty);
  };

  decrease = () => {
    console.log("Decrease!!");
    if (this.state.quantity > this.props.minimum) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  handleAddToCartButton = () => {
    var item = {...this.props.data};
    item.quantity = this.state.quantity;
    console.log(item);
    this.props.addToCart(item);
  };


}

const mapStateToProps = (state) => {
  return {
      cart: state.cart
  }
};

export default connect(mapStateToProps, {addToCart})(QuantityPicker);
