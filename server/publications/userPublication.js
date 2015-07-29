Meteor.publish('currentClients', function () {
  return Meteor.users.find();
});
