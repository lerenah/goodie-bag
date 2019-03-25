import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gettingCandies } from '../reducers/candies';
import { Link } from 'react-dom';

class CandiesList extends Component {
  componentDidMount() {
    // console.log(gettingCandies, ' is fetch candies');
    console.log('component did mount');
    this.props.gettingCandies();
  }

  render() {
    console.log(this.props.candy, ' is props 14');
    // return <h1>Hello again</h1>;

    const candyItems = this.props.candy.map(candy => {
      return (
        <div key={candy.id}>
          <h3>{candy.name}</h3>
          <p>{candy.description}</p>
          <Link to={`/candies/${candy.id}`}>
            <img src={candy.imageURL} />
          </Link>
        </div>
      );
    });
    return <div>{candyItems}</div>;
  }
}

const mapStateToProps = state => ({
  candy: state.candies.candies
});

const mapDispatchToProps = dispatch => ({
  gettingCandies() {
    return dispatch(gettingCandies());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandiesList);
