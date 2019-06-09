import React, { Component } from 'react';
import Notifactions from './widgets/Notifactions'
import FamilyMemebers from './widgets/FamilyMembers'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render () {
    const { auth, firebase, profile } = this.props;
    if(!auth.uid) return <Redirect to='/signin' />;
    if(profile.isAdmin !== undefined) {
        if(profile.isAdmin) return <Redirect to='/admindb' />;
        else if(!profile.isAdmin) return <Redirect to='/memberdb' />;
        else return <Redirect to='/signin' />;
    } else return (<div>Loading...</div>);
  }
}

const mapState = (state) => {
  return {
      firebase: state.firebase,
      auth: state.firebase.auth,
      profile: state.firebase.profile
  }
}

export default connect(mapState)(Dashboard);