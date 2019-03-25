import React from 'react';
import CandiesList from './CandiesList';
import SingleCandy from './SingleCandy';
import { BrowserRouter as Router, Route, Switch } from 'react-dom';

const Root = () => {
  return (
    <div>
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
        <Router>
          <Switch>
            <Route exact path='/' component={CandiesList} />
            <Route exact path='/candies/:id' component={SingleCandy} />
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default Root;
