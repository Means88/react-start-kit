import React from 'react';
import { connect } from 'react-redux';
import rest from '../../rest';

const { actions } = rest;

@connect((state) => ({
  example: state.example
}))
class ExampleComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.example());
  }
  render() {
    return <div>{JSON.stringify(this.props.example.data)}</div>;
  }
}

export default ExampleComponent;
