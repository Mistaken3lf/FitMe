Meteor.methods({
  //Update the currently logged in users profile
  updateMyProfile(myUpdatedProfile, myId) {
    //Make sure user is logged in before letting them update
    //a profile
    if (Meteor.userId()) {
      let currentUser = Meteor.users.findOne({
        _id: myId
      });

      if (currentUser.userStatus == "suspended") {
        throw new Meteor.Error("Sorry, you account has been suspended");
      }
      //Update the users new profile
      Meteor.users.update(myId, myUpdatedProfile);
    } else {
      throw new Meteor.Error("not-authorized");
    }
  }
});