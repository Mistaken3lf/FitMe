const UpdateMyProfilePicture = new ValidatedMethod({
  name: "updateMyProfilePicture",

  //Validate the field being updated, the actual data,
  //and the clients id
  validate: new SimpleSchema({
    picture: {
      type: String
    }
  }).validator(),

  run({
    picture,
    clientId
  }) {
    if (Roles.userIsInRole(this.userId, "client")) {
      //Find the current client
      const currentClient = Meteor.users.findOne({
        _id: this.userId
      });

      //Make sure the client is not suspended
      if (currentClient.userStatus == "suspended") {
        throw new Meteor.Error("Your account is suspended");
      }

      //Update the clients profile picture
      Meteor.users.update({
        _id: this.userId
      }, {
        $set: {
          profilePicture: picture
        }
      });
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
