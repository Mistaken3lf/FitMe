Meteor.methods({
  suspendClient(clientId) {
    //Make sure the user is a trainer and logged in before
    //allowing the deletion of a client
    if (Roles.userIsInRole(this.userId, 'trainer')) {
      let currentTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      if (currentTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Your account has been suspended");
      }

      let user = Meteor.users.findOne(clientId);

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
        Meteor.users.update({
          _id: user._id
        }, {
          $set: {
            userStatus: "active",
            previouslySuspended: false
          }
        });
      }
    } else {
      throw new Meteor.Error("Not-Authorized");
    }
  }
});
