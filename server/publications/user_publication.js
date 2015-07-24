Meteor.publish('current_users', function () {
  return Meteor.users.find();
});
