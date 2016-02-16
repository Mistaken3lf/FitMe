Meteor.publish('trainersAccount', function (currentTrainerId) {
  //Check the trainers id to make sure its real
  new SimpleSchema({
    currentTrainerId: {
      type: String
    }
  }).validate({
    currentTrainerId
  });

  //Make sure the user is logged in and a admin before publishing
  if (Roles.userIsInRole(this.userId, "admin")) {
    //Find a specific trainer based on the flow router
    //param passed in as currentTrainerId
    return Meteor.users.find({
      _id: currentTrainerId
    }, {
      fields: {
        planType: 1,
        datePurchased: 1,
        expiresOn: 1,
        clientLimit: 1,
        "status.lastLogin": 1,
      }
    });
  }

  //Not authorized to access trainer data
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});