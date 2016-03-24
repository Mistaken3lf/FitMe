const updateMyWorkout = new ValidatedMethod({
  name: "updateMyWorkout",

  validate: new SimpleSchema({
    fieldName: {
      type: String
    },

    data: {
      type: String
    }
  }).validator(),

  run({
    fieldName,
    data,
  }) {
    if (Roles.userIsInRole(this.userId, "client")) {
      const thisClient = Meteor.users.findOne({
        _id: this.userId
      });

      if (thisClient.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account is suspended");
      }

      let name = fieldName
      let value = data;
      let query = {};
      query[name] = value;

      //Update or insert the clients stats
      ClientWorkout.upsert({
        whosWorkout: this.userId,
        createdBy: thisClient.createdBy
      }, {
        $set: query
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
