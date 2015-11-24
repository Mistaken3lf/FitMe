Meteor.methods({
  updateClientCount: function () {
    if (Roles.userIsInRole(this.userId, "trainer") || Roles.userIsInRole("admin")) {
      throw new Meteor.Error("not-authorized");
    }

    Meteor.users.update({
      _id: this.userId
    }, {
      $set: {
        clientLimit: 5
      }
    });
  }
});