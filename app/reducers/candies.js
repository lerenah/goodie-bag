import axios from 'axios';

// Action Types
export const FETCH_ALL_CANDIES = 'FETCH_ALL_CANDIES';
export const SINGLE_CANDY = 'SINGLE_CANDY';

// Action Creator
export const getCandies = candy => ({
  type: FETCH_ALL_CANDIES,
  payload: candy
});

export const getSingleCandy = candyId => ({
  type: SINGLE_CANDY,
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
  } catch (err) {
    console.log(err);
  }
};

//Initial State
const candies = { candy: [], candies: {} };

// Sub-Reducer
export const candyReducer = (state = candies, action) => {
  switch (action.type) {
    case 'FETCH_ALL_CANDIES':
      console.log(action, ' is action');
      console.log(state, ' is state');
      return { ...state, candy: action.payload };
    case 'SINGLE_CANDY':
      return { ...state, candies: action.payload };
    default:
      return state;
  }
};
