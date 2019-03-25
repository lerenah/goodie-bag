import React from 'react';
import { gettingSingleCandy } from '../reducers/candies';
import { connect } from 'react-redux';

class SingleCandy extends React.Component {
  compenentDidMount() {
    this.props.gettingSingleCandyForComponent(this.props.match.params.id);
  }
  render() {
    const { name, description, imageUrl, quantity } = this.props.singleCandy;
    return (
      <div>
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
    return dispatch(gettingSingleCandy(candyId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCandy);
