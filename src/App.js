import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './componets/layout/Navbar'
import MemDashboard from './componets/dashboard/MemDashboard'
import AdminDashboard from './componets/dashboard/AdminDashboard'
import PoolSide from './componets/poolside/PoolSide'
import CreateFamily from './componets/poolside/newFamily/CreateFamily'
import Events from './componets/poolside/Events'
import SignIn from './componets/dashboard/auth/SignIn'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={ SignIn }/>
            <Route path="/poolside" component={ PoolSide }/>
            <Route path="/signin" component={ SignIn }/>
            <Route path="/createfamily" component={ CreateFamily }/>
            <Route path="/memberdb" component={ MemDashboard }/>
            <Route path="/admindb" component={ AdminDashboard }/>
            <Route path="/events" component={ Events }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
