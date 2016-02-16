Meteor.methods({
  suspendClientAdmin(clientId) {
    new SimpleSchema({
        clientId: {
          type: String
        }
      }).validate({
        clientId
      });

    //Make sure the user is a trainer and logged in before
    //allowing the deletion of a client
    if (Roles.userIsInRole(this.userId, 'admin')) {
      const user = Meteor.users.findOne(clientId);

      //Check if the user is active already
      if (user.userStatus == "active") {
        //If they are active suspend them
        Meteor.users.update({
          _id: user._id
        }, {
          $set: {
            userStatus: "suspended",
            previouslySuspended: true
          }
        });
      } else {
        //They are already suspended so set them to active
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
