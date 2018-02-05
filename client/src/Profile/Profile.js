import React, { Component } from 'react';
//import Dropzone from 'react-dropzone';

class Profile extends Component {
/*   constructor(props) {
    super(props);
    this.state = {
      open: false,
      title: "",
      comments: "",
      results: [],
      user: "",
      email: null,
      photoRef: "",
      nickname: "",
      profileOpen: false,
      favoriteBook: "",
      currentlyReading: "",
      newPhoto: "",
      newFavBook: "",
      newCurrRead: ""
    };
  }

  getUser() {
    userHelpers.getUser(this.state.email)
      .then(result => {
        if (result.data != null) {
          this.setState({
            user: result.data,
            favoriteBook: result.data.favoriteBook,
            currentlyReading: result.data.currentlyReading,
            photoRef: result.data.photoRef
          }, this.getLibrary);
        } else {
          userHelpers.createUser(this.state.email, this.state.nickname, this.state.photoRef)
            .then(result => {
              this.setState({
                user: result.data
              }, this.getLibrary);
            })
        }
      })
  }

  getLibrary = () => {
    libraryHelpers.showBooks(this.state.user.id).then(function (response) {
      this.setState({ results: response.data })
    }.bind(this))
  }

  componentDidMount() {
    let self = this;
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({
          email: profile.email,
          photoRef: profile.picture,
          nickname: profile.nickname
        }, self.getUser);
      });
    } else {
      this.setState({
        email: userProfile.email,
        photoRef: userProfile.picture,
        nickname: userProfile.nickname,
      }, self.getUser);
    }
  }

  handleRequestClose = () => {
    this.setState({ open: false });
    libraryHelpers.getBookImageTitle(this.state.title).then(function (data) {
      libraryHelpers.saveBook(data.returnedTitle, data.returnedAuthor, this.state.comments, data.returnedLink, this.state.user.id);
      libraryHelpers.showBooks(this.state.user.id).then(function (response) {
        this.setState({
          results: response.data
        })
      }.bind(this))
    }.bind(this))
  }

  handleEditRequestClose = () => {
    this.setState({ profileOpen: false });
  }

  editProfile = () => {
    let self = this;
    userHelpers.updateUser(this.state.user.id, this.state.newFavBook, this.state.newCurrRead, this.state.newPhoto)
      .then(() => {
        self.getUser();
        self.handleEditRequestClose();
      })
  }

  handleTouchTap = () => {
    this.setState({ open: true });
  }

  handleEditTouchTap = () => {
    this.setState({
      profileOpen: true,
      newPhoto: '',
      newFavBook: '',
      newCurrRead: ''
    });
  }

  handleChange = (event) => {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleDrop = files => {
    const image = files[0];
    userHelpers.cloudinaryPhoto(image)
      .then(response => {
        this.setState({ newPhoto: response.data.secure_url })
      })
  } */

  // Here we render the function
  render() {

    return (
        <div>
            <h2>profile</h2>
            </div>
    );
  }
};

export default Profile;