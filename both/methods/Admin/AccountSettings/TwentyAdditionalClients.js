const twentyAdditionalClients = new ValidatedMethod({
  name: "twentyAdditionalClients",

  //Validate the trainers id
  validate: new SimpleSchema({
    trainerId: {
      type: String
    }
  }).validator(),

  run({
    trainerId
  }) {
    if (Roles.userIsInRole(this.userId, "admin")) {
      //Add 20 additional clients to the trainers limit
      Meteor.users.update({
        _id: trainerId
      }, {
        $inc: {
          clientLimit: 20,
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});

