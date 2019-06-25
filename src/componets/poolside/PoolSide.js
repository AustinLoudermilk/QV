import React, { Component } from 'react';
import SignIn from './SignIn'
import SignedIn from './SignedIn'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class PoolSide extends Component {
  render () {
    const { families, auth, profile } = this.props;

    if(!auth.uid) return <Redirect to='/signin' />
    else if(profile !== undefined && profile.isEmpty == false) {
      if(profile.isAdmin) {
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
      } else return <Redirect to='/' />
    } else return (<div>Loading...</div>);
  }
}

const mapState = (state) => {
  return {
    families: state.firestore.ordered.families,
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
}

export default compose(
  connect(mapState),
  firestoreConnect([{ collection: 'families' }])
)(PoolSide); 