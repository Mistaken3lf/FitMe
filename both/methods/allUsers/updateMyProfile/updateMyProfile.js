Meteor.methods({
  //Update the currently logged in users profile
  updateMyProfile: function (myUpdatedProfile, myId) {
    //Make sure user is logged in before letting them update
    //a profile
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    //Update the users new profile
    Meteor.users.update(myId, myUpdatedProfile);
  }
});