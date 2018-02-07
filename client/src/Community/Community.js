import React, { Component } from 'react';
import userHelpers from '../utils/userHelpers';
import './Community.css';

class Community extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  getUsers = () => {
    userHelpers.getUsers()
      .then(data => {
        this.setState({ users: data })
      })
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {

    let display;
    if (this.state.users.data !== undefined) {
      display = (
        <div className="users-display">
          {this.state.users.data.map((user, i) => {
            return (
                <div className="profile-panel">
                  <div className="user-name">
                    <a>{user.name}</a>
                  </div>
                  <img src={user.photoRef} id="user-photo" alt="user" />
                  <div id="about">
                    <p><strong>About: </strong>{user.about}</p>
                  </div>
                  <div id="message-button">
                    <a id="message-link">Message</a>
                  </div>
                </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="users-wrapper">
        {display}
      </div>
    )
  }

}

export default Community;