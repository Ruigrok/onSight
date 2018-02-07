var User = require('../models/User');


module.exports = app => {

  app.get('/api/users/:email', function(req, res) {
    User.findOne({ email: req.params.email }, function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
  })

  app.post('/api/users', function(req, res) {
    let newUser = new User(req.body);

    newUser.save(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
  })

  app.put('/api/users/:id', function(req, res) {
    User.findByIdAndUpdate(
      req.params.id, 
      {$set: req.body}, 
      { new: true }, function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
  })

  app.get('/api/users', function(req, res) {
    User.find({}, function (err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    })
  })

}
