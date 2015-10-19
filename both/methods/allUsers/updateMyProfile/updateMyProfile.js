Meteor.methods({
  //Update the currently logged in users profile
  updateMyProfile: function (myUpdatedProfile, myId) {
    //Make sure user is logged in before letting them update
    //a profile
    if (!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    //Check the newly updated info against the server to
    //make sure its valid
    check(myUpdatedProfile, Meteor.users.simpleSchema());

    //Check id against server
    check(myId, String);

    //Update the users new profile
    Meteor.users.update(myId, myUpdatedProfile);
  }
});
