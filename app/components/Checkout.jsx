import React, { Component } from 'react';
import { connect } from 'react-redux';

import CartSideBar from './CartSideBar';

import { checkout } from '../reducers/cart';

//utils funcs
import { calculateTotalPrice } from '../utils/reactUtils';

class Checkout extends Component {

  render() {
    const { cart, auth } = this.props;
    const totalPrice = (cart.guitars) ? calculateTotalPrice(cart.guitars) : 0;

    return (
      <div className="checkout-page">
        {auth &&
          <div className="container">
            <div className="col-lg-8 col-md-8">
            <h1>Checkout for {auth.username}</h1>
            <h3>TotalPrice: ${totalPrice}</h3>
            <form className="form-horizontal" role="form" onSubmit={(evt) => {
              evt.preventDefault();
              this.props.checkout(evt.target)
              }}>
              <fieldset>
                <legend>Shipping Address</legend>
                <div className="form-group">
                  <label className="col-sm-3 control-label" for="address">Address</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" name="address" id="address" placeholder="Shipping Address..." />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label" for="city">City</label>
                  <div className="col-sm-5">
                    <input type="text" className="form-control" name="city" id="city" placeholder="City..." />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label" for="zipcode">State</label>
                  <div className="col-sm-3">
                    <input type="text" className="form-control" name="state" id="state" placeholder="Zip Code..." />
                  </div>
                </div>
                 <div className="form-group">
                  <label className="col-sm-3 control-label" for="zipcode">Zipcode</label>
                  <div className="col-sm-3">
                    <input type="text" className="form-control" name="zipcode" id="zipcode" placeholder="Zip Code..." />
                  </div>
                </div>
                <legend>Payment</legend>
                <div className="form-group">
                  <label className="col-sm-3 control-label" for="card-holder-name">Name on Card</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" name="card-holder-name" id="card-holder-name" placeholder="Card Holder's Name" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label" for="card-number">Card Number</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" name="card-number" id="card-number" placeholder="Debit/Credit Card Number" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label" for="expiry-month">Expiration Date</label>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-xs-3">
                        <select className="form-control col-sm-2" name="expiry-month" id="expiry-month">
                          <option>Month</option>
                          <option value="01">Jan (01)</option>
                          <option value="02">Feb (02)</option>
                          <option value="03">Mar (03)</option>
                          <option value="04">Apr (04)</option>
                          <option value="05">May (05)</option>
                          <option value="06">June (06)</option>
                          <option value="07">July (07)</option>
                          <option value="08">Aug (08)</option>
                          <option value="09">Sep (09)</option>
                          <option value="10">Oct (10)</option>
                          <option value="11">Nov (11)</option>
                          <option value="12">Dec (12)</option>
                        </select>
                      </div>
                      <div className="col-xs-3">
                        <select className="form-control" name="expiry-year">
                          <option value="13">2013</option>
                          <option value="14">2014</option>
                          <option value="15">2015</option>
                          <option value="16">2016</option>
                          <option value="17">2017</option>
                          <option value="18">2018</option>
                          <option value="19">2019</option>
                          <option value="20">2020</option>
                          <option value="21">2021</option>
                          <option value="22">2022</option>
                          <option value="23">2023</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label" for="cvv">Card CVV</label>
                  <div className="col-sm-3">
                    <input type="text" className="form-control" name="cvv" id="cvv" placeholder="Security Code" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-offset-3 col-sm-9">
                    <button type="submit" className="btn btn-success">Pay Now</button>
                  </div>
                </div>
              </fieldset>
            </form>
            </div>
            <div className="col-lg-4 col-md-4">
              <CartSideBar />
              </div>
          </div>
        }
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
    checkout(body) {
      console.log('herro body...', body)
      dispatch(checkout(body));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
