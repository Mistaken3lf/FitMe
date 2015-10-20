Meteor.methods({
  //Delete the client when the delete button on the current clients
  //page is clicked
  suspendUser: function (clientId) {
    //Make sure the user is a trainer and logged in before
    //allowing the deletion of a client
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    //Check id against server
    check(clientId, String);

    var user = Meteor.users.findOne(clientId);

    if (Roles.userIsInRole(this.userId, "admin")) {
      if (user.userStatus == "active") {
        Meteor.users.update({
          _id: user._id
        }, {
          $set: {
            userStatus: "suspended"
          }
        });

        Meteor.users.update({
          "userProfile.createdBy": user._id
        }, {
          $set: {
            userStatus: "suspended"
          }
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
          "userProfile.createdBy": user._id
        }, {
          $set: {
            userStatus: "active"
          }
        });
      }
    } else {
      if (user.userStatus == "active") {
        Meteor.users.update({
          _id: user._id
        }, {
          $set: {
            userStatus: "suspended"
          }
        });
      } else {
        Meteor.users.update({
          _id: user._id
        }, {
          $set: {
            userStatus: "active"
          }
        });
      }
    }
  }
});
