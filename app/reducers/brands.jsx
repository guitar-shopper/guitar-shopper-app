import axios from 'axios';

const GET_ALL_BRANDS = 'GET_ALL_BRANDS';

export const getAllBrands = (brands) => {
  return {
    type: GET_ALL_BRANDS,
    brands
  }
}

export default (brands = [], action) => {
  switch (action.type) {

    case GET_ALL_BRANDS:
      return action.brands;

    default:
      return brands;
  }
}

export const fetchAllBrands = () => (dispatch) => {
  return axios.get('/api/brands')
  .then(res => res.data)
  .then(brands => {
    dispatch(getAllBrands(brands));
  })
}
