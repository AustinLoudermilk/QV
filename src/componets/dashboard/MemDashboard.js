import React, { Component } from 'react';
import Notifactions from './widgets/Notifactions'
import FamilyMemebers from './widgets/FamilyMembers'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class MemDashboard extends Component {
  render () {
    const { auth, memArray, firebase } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="dashboard container">
          <div className="row">
              <div className="col s12 m6">
                <FamilyMemebers/>
              </div>
              <div className="col s12 m5 offset-m1">
                <Notifactions/>
              </div>
          </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
      firebase: state.firebase,
      auth: state.firebase.auth,
      memArray: state.firebase.profile.members
  }
}

export default connect(mapState)(MemDashboard);