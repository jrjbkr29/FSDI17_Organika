import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./navBar.css";
import { addToCart, updateTotal } from "../store/actions";

import { connect } from "react-redux";

class NavBar extends Component {

  state = {}
  render() {

    return (
      <nav id="main-nav" className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Home</Link>
        <div>
          <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" id="ulStyle">
            <li className="nav-item active">
              <Link className="nav-link" to="/catalog">Catalog <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">Todo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>


          </ul>
        </div>
        <Link to="/cart"><button id="cart-btn" className="btn btn-outline-info my-2 my-sm-0" onClick={this.showCart}><i className="fa fa-shopping-cart" aria-hidden="true"></i> {this.props.cartItems.length}</button></Link>
      </nav>
    );
  }

  showCart = () => {
    console.log("Show Cart");
    var item = [...this.props.cartItems];
    var cartTotal = 0;
    if (item.length !== 0) {
      for (let i = 0; i < item.length; i++) {
        cartTotal += parseFloat(item[i].itemTotal);
        this.props.updateTotal(cartTotal);
      }
    }
    else {
      this.props.updateTotal(cartTotal);
    }
  }

}
const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    total: state.total
  }
};

export default connect(mapStateToProps, { addToCart, updateTotal })(NavBar);