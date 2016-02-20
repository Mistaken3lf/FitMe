const updateMyProfile = new ValidatedMethod({
  name: "updateTrainersProfile",

  validate: new SimpleSchema({
    fieldName: {
      type: String
    },

    data: {
      type: String
    },

    trainerId: {
      type: String
    }
  }).validator(),

  run({
    fieldName,
    data,
    trainerId
  }) {
    //Make sure user is logged in before letting them update
    //a profile
    if (Roles.userIsInRole(this.userId, "admin")) {
      let name = fieldName
      let value = data;
      let query = {};
      query[name] = value;

      //Update the users new profile
      Meteor.users.update({
        _id: trainerId
      }, {
        $set: query
      });

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
