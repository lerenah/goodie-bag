import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCandies } from '../reducers/candies';

class CandiesList extends Component {
  componentDidMount() {
    console.log(getCandies, ' is fetch candies');
    console.log('component did mount');
    this.props.getCandies();
  }

  render() {
    console.log(this.props.candy, ' is props 14');
    // return <h1>Hello again</h1>;

    const candyItems = this.props.candy.map(candy => {
      return (
        <div key={candy.id}>
          <h3>{candy.name}</h3>
          <p>{candy.description}</p>
          <img src={candy.imageUrl} />
        </div>
      );
    });
    return <div>{candyItems}</div>;
  }
}

const mapStateToProps = state => ({
  candy: state.candies
});

// const mapDispatchToProps = dispatch => {
//   return dispatch(getCandies());
// };

export default connect(
  mapStateToProps,
  { getCandies }
)(CandiesList);
