import React from 'react';
import CandiesList from './CandiesList';
import SingleCandy from './SingleCandy';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Goodie Bag</Link>
          </li>
          <li>
            <Link to={'/add'}>Add Goodie</Link>
          </li>
          <li>
            <Link to={'/remove'}>Remove Goodie</Link>
          </li>
        </ul>
      </nav>
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
