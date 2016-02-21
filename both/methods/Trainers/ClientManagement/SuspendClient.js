const suspendClient = new ValidatedMethod({
  name: "suspendClient",

  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    if (Roles.userIsInRole(this.userId, 'trainer')) {
      const currentTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      if (currentTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Your account has been suspended");
      }

      const user = Meteor.users.findOne(id);

      //Make sure the trainer owns the client
      if (user.createdBy == this.userId) {
        //If the client is active suspend them
        if (user.userStatus == "active") {
          Meteor.users.update({
            _id: user._id
          }, {
            $set: {
              userStatus: "suspended",
              previouslySuspended: true
            }
          });
        } else {
          //They are already suspended so make them active
          Meteor.users.update({
            _id: user._id
          }, {
            $set: {
              userStatus: "active",
              previouslySuspended: false
            }
          });
        }
      }
    } else {
      throw new Meteor.Error("Not-Authorized");
    }
  }
});


