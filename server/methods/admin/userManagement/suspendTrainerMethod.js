Meteor.methods({
  //Delete the client when the delete button on the current clients
  //page is clicked
  suspendTrainer(trainerId) {
    //Make sure the user is a trainer and logged in before
    //allowing the deletion of a client
    if (Roles.userIsInRole(this.userId, 'admin')) {
      let user = Meteor.users.findOne(trainerId);

      if (user.userStatus == "active") {
        Meteor.users.update({
          _id: user._id
        }, {
          $set: {
            userStatus: "suspended"
          }
        });

        Meteor.users.update({
          createdBy: user._id
        }, {
          $set: {
            userStatus: "suspended",
          }
        }, {
          multi: true
        });
      } else {
        Meteor.users.update({
          _id: user._id
        }, {
          $set: {
            userStatus: "active"
          }
        });

        Meteor.users.update({
          createdBy: user._id,
          previouslySuspended: false
        }, {
          $set: {
            userStatus: "active"
          }
        }, {
          multi: true
        });
      }
    }
  }
});
