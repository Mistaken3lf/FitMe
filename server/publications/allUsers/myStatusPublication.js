Meteor.publish('myStatus', function () {
  //If the user is logged in then publish their fields
  if (this.userId) {
    //Find the logged in user
    return Meteor.users.find({
      _id: this.userId
    }, {
      fields: {
        userStatus: 1
      }
    });
  }

  //User is not authorized to access this publication
  else {
    throw new Meteor.Error("not-authorized");

    //Return ready to the router is not waiting for nothing
    return this.ready();
  }
});
