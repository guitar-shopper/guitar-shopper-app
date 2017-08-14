import axios from 'axios';

import { updateOrder } from './order';

// utils funcs
import { calculateTotalPrice } from '../utils/reactUtils';

// Action
const SET_CURRENT_CART = 'SET_CURRENT_CART';
const CLEAR_CART = 'CLEAR_CART';
const GET_CART = 'GET_CART'

// Action Creators
export const setCurrentCart = (cart) => {
  return {
    type: SET_CURRENT_CART,
    cart
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

export const getCart = () => {
  return {
    type: GET_CART
  }
}

//Reducer
export default (cart = {}, action) => {
  switch (action.type) {

    case SET_CURRENT_CART:
      return action.cart;

    case CLEAR_CART:
      return {};

    case GET_CART:
      return cart;

    default:
      return cart
  }
}


// Thunk Creator
export const getCurrent = (userId) => dispatch => {
  if (userId) {


    return axios.get(`/api/carts/${userId}`)
      .then(res => res.data)
      .then(cart => dispatch(setCurrentCart(cart)))
  }
  else {
    return dispatch(setCurrentCart(null))
  }
}

export const addToCart = (guitarId, userId, cartId) => dispatch => {
  return axios.post(`/api/carts/${cartId}`, {guitarId})
    .then(res => res.data)
    .then (updatedCart => {
      dispatch(getCurrent(userId))
      console.log("AXIOS UPDATED CART:", updatedCart);
    })
}

export const removeFromCart = (guitarId, cartId, userId) => dispatch => {
  return axios.delete(`/api/carts/${cartId}`, {data:{guitarId}})
    .then(res => res.data)
    .then (updatedCart => {
      dispatch(getCurrent(userId))
      console.log("AXIOS UPDATED CART:", updatedCart);
    })
}

export const checkout = (infoObj) => dispatch => {

  startPromise()
  .then(() => {
    return dispatch(getCart());
  })
  .then(cart => {
    infoObj.totalPrice = calculateTotalPrice(currentCart.guitars);
    infoObj.guitars = currentCart.guitars.map(guitar => {
    return {
      guitarId: guitar.id,
      price: guitar.price
    }
  })
  infoObj.cartId = currentCart.id;
  })

  return axios.post('/api/carts/checkout', infoObj)
  .then(res => res.data)
  .then(order => dispatch(updateOrder(order)))
  .then(() => dispatch(clearCart()));
}


function startPromise() {
  return new Promise((resolve, reject) => {
    resolve(1);
  })
}
