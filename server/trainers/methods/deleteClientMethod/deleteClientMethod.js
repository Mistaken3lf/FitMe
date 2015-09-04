Meteor.methods({
  //Remove client from database
  deleteClient: function (clientId) {

    //Make sure the user is actually logged in
    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Meteor.users.remove(clientId);
  }
});
