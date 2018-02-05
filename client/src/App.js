import React, { Component } from 'react';
import logo from './logo.svg';
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
          <img src='https://i.pinimg.com/originals/be/10/f8/be10f88c2097736acffffc6e01cc727b.jpg' className="App-logo" alt="logo" />
          <h1 className="App-title">onSight</h1>
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
