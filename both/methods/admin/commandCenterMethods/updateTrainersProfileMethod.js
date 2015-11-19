Meteor.methods({
  updateTrainersProfile: function (updatedProfile, trainerId) {
    //ADMIN ONLY!!!
    if (!Roles.userIsInRole(this.userId, "admin")) {
      throw new Meteor.Error("not-authorized");
    }
    
    //Update the trainers profile
    Meteor.users.update(trainerId, updatedProfile);
  }
});
