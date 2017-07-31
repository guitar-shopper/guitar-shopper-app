import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCurrent } from 'APP/app/reducers/cart'
import GuitarItem from './Guitar/GuitarItem';

/* -----------------    COMPONENT     ------------------ */

class Cart extends Component {
    constructor() {
        super();

    }

    componentDidMount () {
       this.props.getCurrent(this.props.auth.id);
    }

    render() {
        const {cart, auth} = this.props;
        return (

            <div className="container">

              <div className="user-query">
              </div>
              <br />
              <br />
              <div className="user-list">
                  {
                      cart.guitars && cart.guitars
                          .map(guitar => <div key={guitar.id}>
                              <GuitarItem guitar={guitar} key={guitar.id}/>
                              <button className="navbar-btn btn btn-default"
                                onClick={() => this.props.removeFromCart(guitar.id, cart.id, auth.id)}>
                                Remove from Cart
                            </button></div>)
                  }
              </div>
            </div>
        );
    }
}

/* -----------------    CONTAINER     ------------------ */

import { removeFromCart } from 'APP/app/reducers/cart'
const mapState = ({cart, auth}) => ({cart, auth});

// const mapDispatch = { addUser };

export default connect(mapState, {getCurrent, removeFromCart})(Cart);

