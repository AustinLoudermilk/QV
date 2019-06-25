import React, { Component } from 'react';
import Notifactions from './widgets/Notifactions'
import FamilyMemebers from './widgets/FamilyMembers'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class AdminDashboard extends Component {
  render () {
    const { auth, notifactions } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
          <div className="row">
              <div className="col s12 m6">
                <FamilyMemebers/>
              </div>
              <div className="col s12 m5 offset-m1">
                <Notifactions notifactions={ notifactions }/>
              </div>
          </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
      auth: state.firebase.auth,
      notifactions: state.firestore.ordered.notifactions
  }
}

export default compose(
  connect(mapState),
  firestoreConnect([
    { collection: 'notifactions', limit: 5, orderBy: ['time', 'desc'] }
  ])
)(AdminDashboard)