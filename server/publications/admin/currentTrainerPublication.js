Meteor.publish('currentTrainer', function (currentTrainerId) {
  //Make sure the user is logged in and a admin before publishing
  if (Roles.userIsInRole(this.userId, "admin")) {
    //Find a specific trainer based on the flow router
    //param passed in as currentTrainerId
    return Meteor.users.find({
      _id: currentTrainerId
    });
  }

  //Not authorized to access trainer data
  else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});
