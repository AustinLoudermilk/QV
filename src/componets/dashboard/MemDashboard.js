import React, { Component } from 'react';
import Notifactions from './widgets/Notifactions'
import FamilyMemebers from './widgets/FamilyMembers'

class MemDashboard extends Component {
  render () {
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

export default MemDashboard;
