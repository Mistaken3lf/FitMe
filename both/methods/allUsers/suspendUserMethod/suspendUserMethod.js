Meteor.methods({
  //Delete the client when the delete button on the current clients
  //page is clicked
  suspendUser: function (clientId) {
    //Make sure the user is a trainer and logged in before
    //allowing the deletion of a client
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Meteor.users.update({
      _id: clientId
    }, {
      $set: {
        userStatus: "suspended"
      }
    });
  }
});
