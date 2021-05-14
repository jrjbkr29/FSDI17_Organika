import React, { Component } from "react";
import QuantityPicker from "./quantityPicker";
import "./product.css"

class Product extends Component {
  state = {
    price: this.props.data.price,
    quantity: 1,
  };
  render() {

    return (
      <div className="product">
        <label className="titleLabel">{this.props.data.title}</label>
        <img className="productImage" src={"FSDI17_Organika/Images/products/" + this.props.data.image} alt="product" />

        <label>Each: ${this.props.data.price}</label>
        <QuantityPicker
          minimum={this.props.data.minimum || 1}
          onValueChange={this.handleQuantityChange} price={this.props.data.price} data={this.props.catalog} keyId={this.props.keyId}></QuantityPicker>
      </div>
    );
  }

  // function that is called by the child
  handleQuantityChange = (qty) => {
    console.log("qp val changed to:" + qty);
    this.setState({ quantity: qty });
  };

  getTotal = () => {
    var total = this.props.data.price * this.state.quantity;
    return "$" + total.toFixed(2);
  }

}

export default Product;
