import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (

        <div>
          <h2>Let's get climbing</h2>

          {
            isAuthenticated() && (
                <h4>
                  You are logged in! You can now view your{' '}
                  <Link to="profile" className="libraryLink">Profile</Link>
                  .
                </h4>
              )
          }
          {
            !isAuthenticated() && (
                <h4>
                  You are not logged in! Please{' '}
                  <a
                    style={{ cursor: 'pointer' }}
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </a>
                  {' '}to continue.
                </h4>
              )
          }
          </div>

    );
  }
}

export default Home;