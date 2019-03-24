import React from 'react';
import axios from 'axios';

// Action Types
export const CANDY_SELECTED = 'CANDY_SELECTED';

// Action Creator
export const selectCandy = candy => ({
  type: CANDY_SELECTED,
  candy
});

// THUNK

export const getCandies = () => async dispatch => {
  console.log('testing');
  try {
    console.log('from actions candies server');
    const { data } = await axios.get('/candies');
    dispatch(selectCandy(data));
  } catch (err) {
    console.error(err);
  }
};

//Initial State
const candies = [
  {
    name: 'Skittles',
    description: 'Taste the rainbow',
    quantity: 2,
    imageUrl:
      'https://target.scene7.com/is/image/Target/GUEST_3d2a8073-36e6-4cec-8c8c-872639105820?wid=488&hei=488&fmt=pjpeg'
  }
];

// Sub-Reducer
export const candyReducer = (state = candies, action) => {
  switch (action.type) {
    case 'CANDY_SELECTED':
      console.log(action, ' is action');
      console.log(state, ' is state');
      return action.candy;
    default:
      return state;
  }
};
