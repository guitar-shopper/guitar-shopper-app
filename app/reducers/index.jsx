import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  brands: require('./brands').default,
  guitars: require('./guitars').default,
  cart: require('./cart').default
})

export default rootReducer
