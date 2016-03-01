const suspendClientAdmin = new ValidatedMethod({
  name: "suspendClientAdmin",

  //Validate the clients id
  validate: new SimpleSchema({
    id: {
      type: String
    }
  }).validator(),

  run({
    id
  }) {
    if (Roles.userIsInRole(this.userId, 'admin')) {
      //Find the client clicked on
      const user = Meteor.users.findOne(id);

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
