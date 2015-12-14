Meteor.methods({
  updateTrainersProfile(updatedProfile, trainerId) {
    //ADMIN ONLY!!!
    if (Roles.userIsInRole(this.userId, "admin")) {
      //Update the trainers profile
      Meteor.users.update(trainerId, updatedProfile);

    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});
