import React, { Component } from 'react';
import Notifactions from './widgets/Notifactions'
import FamilyMemebers from './widgets/FamilyMembers'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class MemDashboard extends Component {
  render () {
    const { auth } = this.props;
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
      auth: state.firebase.auth
  }
}

export default connect(mapState )(MemDashboard);