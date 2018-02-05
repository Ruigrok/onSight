import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css'

class Home extends Component {
  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (

        <div>

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

              <div className='landing-wrapper'>
                <button
                  className={'landing-button'}
                  onClick={this.login.bind(this)}>
                  Enter
                </button>
          
            </div>

              )
          }
          </div>

    );
  }
}

export default Home;