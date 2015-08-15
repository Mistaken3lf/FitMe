Meteor.methods({
  deleteClient: function (clientId) {

    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }
    
    Meteor.users.remove(clientId);
  }
});
