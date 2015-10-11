Meteor.publish(null, function() {
  //Publish user roles since they are not published by default
  return Meteor.roles.find({});
});
