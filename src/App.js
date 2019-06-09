import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './componets/layout/Navbar'
import MemDashboard from './componets/dashboard/MemDashboard'
import AdminDashboard from './componets/dashboard/AdminDashboard'
import Dashboard from './componets/dashboard/Dashboard'
import PoolSide from './componets/poolside/PoolSide'
import ManageFamily from './componets/poolside/newFamily/ManageFamily'
import Events from './componets/poolside/Events'
import SignIn from './componets/dashboard/auth/SignIn'
import SignUp from './componets/dashboard/auth/SignUp'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={ Dashboard }/>
            <Route path="/poolside" component={ PoolSide }/>
            <Route path="/signin" component={ SignIn }/>
            <Route path="/signup" component={ SignUp }/>
            <Route path="/managefamily" component={ ManageFamily }/>
            <Route path="/memberdb" component={ MemDashboard }/>
            <Route path="/admindb" component={ AdminDashboard }/>
            <Route path="/dashboard" component={ Dashboard }/>
            <Route path="/events" component={ Events }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
