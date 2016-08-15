import React, { Component } from 'react';
import Counter from './Counter';
import { NICE, SUPER_NICE } from './colors';

export default class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={11} color='blue' />
        <Counter increment={50} color={SUPER_NICE} />
      </div>
    );
  }
}