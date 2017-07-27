import axios from 'axios';

// Action
const GET_ALL_GUITARS = 'GET_ALL_GUITARS';
const GET_ONE_GUITAR = 'GET_ONE_GUITAR';

// Action Creators
export const getAllGuitars = (guitars) => {
  return {
    type: GET_ALL_GUITARS,
    guitars
  }
}

// OB/BJM: consider naming here
export const getOneGuitar = (guitar) => {
  return {
    type: GET_ONE_GUITAR,
    guitar
  }
}

//Reducer
export default (guitars = [], action) => {
  switch (action.type) {
    case GET_ALL_GUITARS:
      return action.guitars;
    case GET_ONE_GUITAR:
      return guitars.concat([action.guitar])
    default:
      return guitars
  }
}


// Thunk Creator
export const fetchAllGuitars = () => dispatch => {
  return axios.get('/api/guitars')
  .then(res => res.data)
  .then(guitars => dispatch(getAllGuitars(guitars)));
}

export const postGuitar = guitar => dispatch => {
  return axios.post('/api/guitars', guitar)
          .then(res => res.data)
          .then(newGuitar => {
            dispatch(getOneGuitar(newGuitar));
            // dispatch(action);
          })
}

