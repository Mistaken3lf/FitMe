//Publish the role package since its not
//automatically published
Meteor.publish(null, function () {
  return Meteor.roles.find({});
});
