const removeClient = new ValidatedMethod({
  name: "removeClient",

  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    //Make sure user is an admin and logged in before allowing the remove
    if (Roles.userIsInRole(this.userId, "admin")) {
      //Remove trainer clicked on
      Meteor.users.remove(id);
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
