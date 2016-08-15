/**
 * Created by haner on 16/8/15.
 */
import React, { Component } from 'react';

import './style/index.scss';

export default class extends Component {
  render() {
    return (
      <div className="spinner-container">
        <div className="spinner">
          <div className="rect1"></div>
          <div className="rect2"></div>
          <div className="rect3"></div>
          <div className="rect4"></div>
          <div className="rect5"></div>
        </div>
      </div>
    );
  }
}
