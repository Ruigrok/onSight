import React, { Component } from 'react';
import userHelpers from '../utils/userHelpers';
import './Profile.css';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dropzone from 'react-dropzone';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      name: "",
      photoRef: "",
      about: "",
      newName: "",
      newPhotoRef: "",
      newAbout: "",
      profileOpen: "",
    };
  }

  getUser() {
    userHelpers.getUser(this.state.email)
      .then(result => {
        if (result.data !== '') {
          this.setState({
            user: result.data,
            email: result.data.email,
            name: result.data.name,
            photoRef: result.data.photoRef,
            about: result.data.about
          });
        } else {
          userHelpers.createUser(this.state.email, this.state.name, this.state.photoRef)
            .then(result => {
              this.setState({
                user: result.data
              });
            })
        }
      })
  }

  componentDidMount() {
    let self = this;
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({
          email: profile.email,
          photoRef: profile.picture,
          name: profile.name
        }, self.getUser);
      });
    } else {
      this.setState({
        email: userProfile.email,
        photoRef: userProfile.picture,
        name: userProfile.name,
      }, self.getUser);
    }
  }

  editProfile = () => {
    userHelpers.updateUser(this.state.user._id, this.state.newName, this.state.newPhotoRef, this.state.newAbout)
      .then(() => {
        this.handleEditRequestClose();
        this.getUser();
      });
  }

  handleEditTouchTap = () => {
    this.setState({
      profileOpen: true,
      newName: '',
      newPhotoRef: '',
      newAbout: ''
    });
  }

  handleEditRequestClose = () => {
    this.setState({ profileOpen: false });
  }

  handleChange = event => {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleDrop = files => {
    const image = files[0];
    userHelpers.cloudinaryPhoto(image)
      .then(response => {
        this.setState({ newPhotoRef: response.data.secure_url })
      })
  }

  render() {

    const editActions = (
      <FlatButton
        label="Update"
        primary={true}
        onTouchTap={this.editProfile}
      />
    );

    return (
      <div className="profile-wrapper">
        <div className="profile-panel">
          <div className="user-name">
            <a>{this.state.name}</a>
          </div>
          <img src={this.state.photoRef} id="user-photo" alt="user" />
          <div id="about">
            <p><strong>About: </strong>{this.state.about}</p>
          </div>
          <MuiThemeProvider>
            <Dialog
              open={this.state.profileOpen}
              title="Edit Profile"
              actions={editActions}
              onRequestClose={this.handleEditRequestClose}
              autoScrollBodyContent={true}
              className="edit-profile"
            >
              <div>
                <h3>Name: </h3>
                <input
                  value={this.state.newName}
                  type="text"
                  className="form-control text-left"
                  placeholder="display name"
                  id="newName"
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <h3>About: </h3>
                <input
                  value={this.state.newAbout}
                  type="text"
                  className="form-control text-left"
                  placeholder="about you"
                  id="newAbout"
                  onChange={this.handleChange}
                />
              </div>
              <div className='edit-photo'>
                <h3>Drag a new photo below or click to upload</h3>
                <Dropzone
                  onDrop={this.handleDrop}
                  accept="image/*"
                />
                {
                  (this.state.newPhotoRef !== "") && (
                    <img src={this.state.newPhotoRef} className='uploaded-photo' alt='Upload Photo' />
                  )
                }
              </div>
            </Dialog>
          </MuiThemeProvider>
          <div id="edit-button">
            <a onTouchTap={this.handleEditTouchTap} id="edit-link">Edit</a>
          </div>
        </div>
      </div>
    );
  }
};

export default Profile;