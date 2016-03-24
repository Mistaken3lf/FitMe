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
    if (Roles.userIsInRole(this.userId, "admin")) {
      //Add 5 additional clients to trainers limit
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
