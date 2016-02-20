const fiveAdditionalClients = new ValidatedMethod({
  name: "fiveAdditionalClients",

  validate: new SimpleSchema({
    trainerId: {
      type: String
    }
  }).validator(),

  run({
    trainerId
  }) {
    //Make sure user is an admin and increment the trainers client
    //by 5
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
