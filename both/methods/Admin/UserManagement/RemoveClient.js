const removeClient = new ValidatedMethod({
  name: "removeClient",

  //Validate the clients id
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      //Remove trainer clicked on
      Meteor.users.remove(id);
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
