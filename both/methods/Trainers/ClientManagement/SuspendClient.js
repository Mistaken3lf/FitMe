const suspendClient = new ValidatedMethod({
  name: "suspendClient",

  //Validate the clients id
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    if (Roles.userIsInRole(this.userId, 'trainer')) {
      //Find the current trainer
      const currentTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      //If the trainer is suspended then deny them
      if (currentTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Your account has been suspended");
      }

      //Find the client
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


