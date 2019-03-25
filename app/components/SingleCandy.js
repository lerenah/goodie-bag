import React from 'react';
import { gettingSingleCandy } from '../reducers/candies';
import { connect } from 'react-redux';

class SingleCandy extends React.Component {
  compenentDidMount() {
    this.props.gettingSingleCandy(this.props.match.params.id);
  }
  render() {
    const { name, description, imageURL, quantity } = this.props.singleCandy;
    return (
      <div>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{quantity}</p>
        <img src={imageURL} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singleCandy: state.candy
});

const mapDispatchToProps = dispatch => ({
  gettingSingleCandy(candyId) {
    return dispatch(gettingSingleCandy(candyId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleCandy);
