Meteor.methods({
  suspendClient(clientId) {
    new SimpleSchema({
      clientId: {
        type: String
      }
    }).validate({
      clientId
    });

    //Make sure the user is a trainer and logged in before
    //allowing the deletion of a client
    if (Roles.userIsInRole(this.userId, 'trainer')) {
      const currentTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      if (currentTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Your account has been suspended");
      }

      const user = Meteor.users.findOne(clientId);
      
      if (user.createdBy == this.userId) {
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
      }
    } else {
      throw new Meteor.Error("Not-Authorized");
    }
  }
});
