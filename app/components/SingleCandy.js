import React from 'react';
import { gettingSingleCandy } from '../reducers/candies';
import { connect } from 'react-redux';

class SingleCandy extends React.Component {
  constructor() {
    super();
    console.log('inside constructor');
  }
  compenentDidMount() {
    console.log('inside of componentDidMount');
    this.props.gettingSingleCandyForComponent(this.props.match.params.id);
  }
  render() {
    console.log(this.props.singleCandy.name, ' is props inside Single Candy');
    const { name, description, imageUrl, quantity } = this.props.singleCandy;
    return (
      <div>
        <h1>hello</h1>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{quantity}</p>
        <img src={imageUrl} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleCandy: state.candies.candy
});

const mapDispatchToProps = dispatch => ({
  gettingSingleCandyForComponent(candyId) {
    // console.log('got to dispatch');
    return dispatch(gettingSingleCandy(candyId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCandy);
