Meteor.methods({
  removeClient(clientId) {
    //Make sure user is an admin and logged in before allowing the remove
    if (Roles.userIsInRole(this.userId, "admin")) {
      //Remove trainer clicked on
      Meteor.users.remove(clientId);
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});