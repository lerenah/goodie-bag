import axios from 'axios';

// Action Types
export const FETCH_ALL_CANDIES = 'FETCH_ALL_CANDIES';
export const FETCH_SINGLE_CANDY = 'SINGLE_CANDY';

// Action Creator
export const getCandies = candy => ({
  type: FETCH_ALL_CANDIES,
  payload: candy
});

export const getSingleCandy = candyId => ({
  type: FETCH_SINGLE_CANDY,
  payload: candyId
});

// THUNK
// Get ALL CANDIES
export const gettingCandies = () => async dispatch => {
  console.log('testing');
  try {
    console.log('from actions candies server');
    const { data } = await axios.get('/api/candies');
    dispatch(getCandies(data));
  } catch (err) {
    console.error(err);
  }
};

// GET SINGLE CANDY
export const gettingSingleCandy = candyId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/candies/${candyId}`);
    dispatch(getSingleCandy(data));
  } catch (err) {
    console.log(err);
  }
};

//Initial State
const initialState = { candies: [], candy: {} };

// Sub-Reducer
export const candyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ALL_CANDIES':
      console.log(action, ' is action');
      console.log(state, ' is state');
      return { ...state, candies: action.payload };
    case 'FETCH_SINGLE_CANDY':
      return { ...state, candy: action.payload };
    default:
      return state;
  }
};
