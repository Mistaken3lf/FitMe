Meteor.methods({
  removeAllClients: function (trainerId) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      //Remove clients associated with the current trainer
      Meteor.users.remove({
        createdBy: trainerId
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
