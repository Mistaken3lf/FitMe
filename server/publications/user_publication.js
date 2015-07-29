Meteor.publish('current_clients', function () {
  if(this.userId) {
    return Meteor.users.find();
  }
});
