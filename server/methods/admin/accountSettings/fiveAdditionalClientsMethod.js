Meteor.methods({
  fiveAdditionalClients(trainerId) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      Meteor.users.update({
        _id: trainerId
      }, {
        $inc: {
          clientLimit: 5,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
