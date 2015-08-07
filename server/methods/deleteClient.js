Meteor.methods({
  deleteClient: function (clientId) {

    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    var client = Meteor.users.findOne(clientId);
    Meteor.users.remove(clientId);
  }
});
