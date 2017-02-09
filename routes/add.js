var data = require("../data.json");

exports.addFriend = function(req, res) { 
  var newFriends = {};
  newFriends.name = req.query.name;
  newFriends.description = req.query.description;
  newFriends.imageURL = "http://lorempixel.com/400/400/people"
  console.log(newFriends);
  data.friends.push(newFriends);
  res.render('index',data);
	// Your code goes here
 }
