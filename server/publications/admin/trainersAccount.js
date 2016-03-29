Meteor.publish('trainersAccount', function (currentTrainerId) {
  new SimpleSchema({
    currentTrainerId: {
      type: String
    }
  }).validate({
    currentTrainerId
  });

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
        lastLogin: 1,
      }
    });
  } else {
    throw new Meteor.Error("not-authorized");
    return this.ready();
  }
});