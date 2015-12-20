Meteor.methods({
  //Delete the client when the delete button on the current clients
  //page is clicked
  suspendUser(clientId) {
    //Make sure the user is a trainer and logged in before
    //allowing the deletion of a client
    if (Roles.userIsInRole(this.userId, 'client')) {
      throw new Meteor.Error("not-authorized");
    } else {
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
            userStatus: "suspended"
          }
        });

        Meteor.users.update({
          createdBy: user._id
        }, {
          $set: {
            userStatus: "suspended"
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
          createdBy: user._id
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
