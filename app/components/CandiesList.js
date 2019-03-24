import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchCandies } from '../reducers/candies';

class CandiesList extends Component {
  constructor(props) {
    super(props);
    console.log(props, ' is props');
    this.state = {
      candy: []
    };
  }

  componentDidMount() {
    this.props.fetchCandies();
  }

  render() {
    const candyItems = this.state.candies.map(candy => {
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

const mapDispatchToProps = dispatch => {
  return dispatch(fetchCandies());
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandiesList);
