import axios from 'axios';

// Action
const SET_CURRENT_CART = 'SET_CURRENT_CART';

// Action Creators
export const setCurrentCart = (cart) => {
  return {
    type: SET_CURRENT_CART,
    cart
  }
}

//Reducer
export default (cart = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_CART:
      return action.cart;
    default:
      return cart
  }
}


// Thunk Creator
export const getCurrent = (userId) => dispatch => {
  if (userId) {
    return axios.get(`/api/carts/${userId}`)
      .then(res => res.data)
      .then(cart => dispatch(setCurrentCart(cart)));
  }
  else {
    return dispatch(setCurrentCart(null))
  }

}

