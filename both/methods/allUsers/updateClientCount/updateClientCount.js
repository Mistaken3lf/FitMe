Meteor.methods({
  updateClientCount: function () {
    if (!Meteor.userId() && Roles.userIsInRole(this.userId, "trainer")) {
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