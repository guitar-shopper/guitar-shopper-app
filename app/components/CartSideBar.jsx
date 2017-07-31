import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class CartSideBar extends Component {

  render() {
    const { cart } = this.props;
    const totalPrice = (this.props.cart.guitars)
      ? cart.guitars
        .map(guitar => {
          return guitar.carts_guitars.quantity * guitar.price
        })
        .reduce((a, b) => a + b)
      : 0;

    return (
      <div className="cart-sidebar">
        {
          cart.guitars && cart.guitars
            .map((guitar, i) => {

              const price = guitar.carts_guitars.quantity * guitar.price;

              return (
                <div className="cart-sidebar-guitar">
                  <h4><span className="cart-sidebar-num">{i + 1}</span>.  {guitar.model}</h4>
                  <p>Quantity:  {guitar.carts_guitars.quantity}
                  </p>
                  <p>Price: ${price}</p>
                </div>
              )
            })
        }
        <h3>Total Price: ${totalPrice}</h3>
        <NavLink to="/checkout"><button className="btn btn-lg btn-success">Checkout</button></NavLink>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    //stuff
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSideBar);