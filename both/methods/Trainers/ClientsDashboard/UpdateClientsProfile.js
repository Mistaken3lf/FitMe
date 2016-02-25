const UpdateClientsProfile = new ValidatedMethod({
  name: "updateClientsProfile",

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

    //Make sure user is logged in and a trainer before performing
    //the method
    if (Roles.userIsInRole(this.userId, "trainer")) {
      const thisClient = Meteor.users.findOne({
        _id: clientId
      });

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
