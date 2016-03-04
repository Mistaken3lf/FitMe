const UpdateProfilePicture = new ValidatedMethod({
  name: "updateProfilePicture",

  //Validate the field being updated, the actual data,
  //and the clients id
  validate: null,

  run({
    picture,
    clientId
  }) {
    if (this.userId) {
      //Find the current trainer
      const currentTrainer = Meteor.users.findOne({
        _id: this.userId
      });

      //Prevent trainer from updating clients profile if they are suspended
      if (currentTrainer.userStatus == "suspended") {
        throw new Meteor.Error("Your account is suspended");
      }

      //Update the users profile picture
      Meteor.users.update({
        _id: clientId
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
