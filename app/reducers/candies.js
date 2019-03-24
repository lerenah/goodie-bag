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

export const fetchCandies = () => async dispatch => {
  try {
    const { data } = await axios.get('/candies');
    dispatch(selectCandy(data));
  } catch (err) {
    console.error(err);
  }
};

//Initial State
const candies = [];

// Sub-Reducer
export const candyReducer = (state = [], action) => {
  switch (action.type) {
    case 'CANDY_SELECTED':
      return action.candy;
    default:
      return state;
  }
};
