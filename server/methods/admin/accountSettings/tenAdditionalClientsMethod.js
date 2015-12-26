Meteor.methods({
  tenAdditionalClients(trainerId) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      Meteor.users.update({
        _id: trainerId
      }, {
        $inc: {
          clientLimit: 10,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
