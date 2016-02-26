const UpdateClientsStats = new ValidatedMethod({
  name: "updateClientsStats",

  validate: new SimpleSchema({
    fieldName: {
      type: String
    },

    data: {
      type: String
    },

    clientId: {
      type: String
    }
  }).validator(),

  run({
    fieldName,
    data,
    clientId
  }) {
    const currentTrainer = Meteor.users.findOne({
      _id: this.userId
    });

    //Prevent trainer from updating clients profile if they are suspended
    if (currentTrainer.userStatus == "suspended") {
      throw new Meteor.Error("Your account is suspended");
    }

    //Make sure user is logged in and a trainer before performing the method
    if (Roles.userIsInRole(this.userId, "trainer")) {
      let name = fieldName
      let value = data;
      let query = {};
      query[name] = value;

      //Update the users new profile
      ClientStats.update({
        whosStats: clientId,
        createdBy: this.userId
      }, {
        $set: query
      }, {
        upsert: true
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
