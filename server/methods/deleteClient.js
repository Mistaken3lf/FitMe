Meteor.methods({
  deleteClient: function (clientId) {
    var client = Meteor.users.findOne(clientId);
    Meteor.users.remove(clientId);
  }
});
