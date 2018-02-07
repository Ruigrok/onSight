var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String
  },
  name: {
    type: String
  },
  photoRef: {
    type: String
  },
  about: {
    type: String
  }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;