import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';

class App extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  logout() {
    this.props.auth.logout();
  }

  render() {

    const { isAuthenticated } = this.props.auth;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">onSight</h1>
          {
            !isAuthenticated() && (
              <h3 className="App-intro">Make Connections. Explore Austin. Climb More.</h3>
            )
          }
          {
            isAuthenticated() && (
              <div className="App-links">
                <button
                  type="button"
                  className="App-logout" 
                  onClick={this.logout.bind(this)}>Log Out</button>
              </div>
            )
          }
        </header>

        <div className="mainSection">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
