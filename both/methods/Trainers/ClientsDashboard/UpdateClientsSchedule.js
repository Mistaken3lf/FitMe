const updateClientsSchedule = new ValidatedMethod({
  name: "updateClientsSchedule",

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
    if (Roles.userIsInRole(this.userId, "trainer")) {
      //Find the current trainer
      const currentTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      //Prevent trainer from updating clients schedule if they are suspended
      if (currentTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Your account is suspended");
      }

      //Find the trainers client
      const thisClient = Meteor.users.findOne({
        _id: clientId
      });

      //Make sure the trainers own the client
      if (thisClient.createdBy == this.userId) {
        let name = fieldName
        let value = data;
        let query = {};
        query[name] = value;

        //Update the users new profile
        Meteor.users.update({
          _id: clientId
        }, {
          $set: query
        });
      }
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
