// actions
const UPDATE_ORDER = 'UPDATE_ORDER';

// action creators
export const updateOrder = (order) => {
  return {
    type: UPDATE_ORDER,
    order
  }
}

// Reducer
export default (order = {}, action) => {

  switch (action.type) {

    case UPDATE_ORDER:
      return action.order;

    default:
      return order;
  }
}
