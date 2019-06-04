import React, { Component } from 'react';
import SignIn from './SignIn'
import SignedIn from './SignedIn'

class PoolSide extends Component {
  render () {
    return (
      <div className="dashboard container">
          <div className="row">
              <div className="col s12 m6">
                <SignIn/>
              </div>
              <div className="col s12 m6">
                <SignedIn/>
              </div>
          </div>
      </div>
    );
  }
}

export default PoolSide;