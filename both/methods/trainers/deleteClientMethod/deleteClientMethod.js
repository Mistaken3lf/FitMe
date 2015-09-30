////////////////////////////////////////////////////////////////////////////////
Meteor.methods({
  //Delete the client when the delete button on the current clients
  //page is clicked
  deleteClient: function (clientId) {
    //Make sure the user is a trainer and logged in before
    //allowing the deletion of a client
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "trainer")) {
      throw new Meteor.Error("not-authorized");
    }

    Meteor.users.update({ _id: this.userId }, { $inc: { clientLimit: -1 } });

    //Delete the client clicked on
    Meteor.users.remove(clientId);
  }
});
////////////////////////////////////////////////////////////////////////////////
