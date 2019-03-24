import React from 'react';
import CandiesList from './CandiesList';
import { selectCandy } from '../reducers/candies';

const Root = props => {
  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <CandiesList props={props} />
      </main>
    </div>
  );
};

export default Root;
