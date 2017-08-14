import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrent } from 'APP/app/reducers/cart'
import GuitarItem from '../Guitar/GuitarItem';
import CartSideBar from './CartSideBar';

/* -----------------    COMPONENT     ------------------ */

class Cart extends Component {

    componentDidMount () {
       this.props.getCurrent(this.props.auth.id);
    }

    render() {
        const {cart, auth} = this.props;

        return (
            <div className="row">
            <div className="col-lg-8 col-mg-8">

              <div className="user-query">
              </div>
              <br />
              <br />
              <div className="user-list">
                  {
                      cart.guitars
                          .map(guitar => <div key={guitar.id}>
                              <GuitarItem guitar={guitar} key={guitar.id}/>
                              <button className="navbar-btn btn btn-default"
                                onClick={() => this.props.removeFromCart(guitar.id, cart.id, auth.id)}>
                                Remove from Cart
                            </button></div>)
                  }
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <CartSideBar />
            </div>
            </div>
        );
    }
}

/* -----------------    CONTAINER     ------------------ */

import { removeFromCart } from 'APP/app/reducers/cart'
const mapState = ({cart, auth}) => ({cart, auth});

export default connect(mapState, {getCurrent, removeFromCart})(Cart);

