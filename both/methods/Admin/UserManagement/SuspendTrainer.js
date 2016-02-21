const suspendTrainer = new ValidatedMethod({
  name: "suspendTrainer",

  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    //Make sure the user is a trainer and logged in before
    //allowing the deletion of a client
    if (Roles.userIsInRole(this.userId, 'admin')) {
      const user = Meteor.users.findOne(id);

      //Check if the user is active
      if (user.userStatus == "active") {
        //Suspend the trainer
        Meteor.users.update({
          _id: user._id
        }, {
          $set: {
            userStatus: "suspended"
          }
        });

        //Set their status since they are suspended
        Meteor.users.update({
          createdBy: user._id,
        }, {
          $set: {
            userStatus: "suspended",
          }
        }, {
          multi: true
        });
      } else {
        //Not suspended so set them active
        Meteor.users.update({
          _id: user._id
        }, {
          $set: {
            userStatus: "active"
          }
        });

        //Set client to active if they were not previously suspended
        //from their trainer
        Meteor.users.update({
          createdBy: user._id,
          previouslySuspended: false
        }, {
          $set: {
            userStatus: "active",
          }
        }, {
          multi: true
        });
      }
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
