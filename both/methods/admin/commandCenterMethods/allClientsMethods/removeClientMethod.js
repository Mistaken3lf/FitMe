Meteor.methods({
  removeClient: function (clientId) {
    //Make sure user is an admin and logged in before allowing the remove
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "admin")) {
      throw new Meteor.Error("not-authorized");
    }

    //Check that the client id is valid
    check(clientId, String);

    //Remove trainer clicked on
    Meteor.users.remove(clientId);
  }
});
