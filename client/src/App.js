import React, { Component } from 'react';
import './App.css';

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
          <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/27859-200.png' className="App-logo" alt="logo" />
          <h1 className="App-title">onSight</h1>
          {
            !isAuthenticated() && (
              <h3>Make Connections. Climb More. Explore Austin.</h3>
            )
          }
          {
            isAuthenticated() && (
              <button type="button" onClick={this.logout.bind(this)}>Log Out</button>

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
