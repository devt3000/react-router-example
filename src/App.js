import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch, Redirect } from 'react-router-dom';

import Home from './component/Home';
import About from './component/About';
import Messages from './component/Messages';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <div className="App-intro">
            <Route path="/" component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/About" component={About} />
            <Redirect to="/" />
          </div>
        </Switch>
      </div>
    )
  }
}

export default App
