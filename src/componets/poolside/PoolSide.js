import React, { Component } from 'react';
import SignIn from './SignIn'
import SignedIn from './SignedIn'
import { connect } from 'react-redux'

class PoolSide extends Component {
  render () {
    const { families } = this.props;
    return (
      <div className="dashboard container">
          <div className="row">
              <div className="col s12 m6">
                <SignIn/>
              </div>
              <div className="col s12 m6">
                <SignedIn families={ families } />
              </div>
          </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    families: state.family.families
  };
}

export default connect(mapState)(PoolSide);