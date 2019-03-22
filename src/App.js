import React, { Component } from 'react';
import Header from './components/Header.js'
import Login from './components/register-login.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Login />
          <p>
          </p>
      </div>
    );
  }
}

export default App;
