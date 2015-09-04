Meteor.methods({
  updateMyProfile: function (myUpdatedProfile, myId) {

    //Make sure user is logged in
    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    //Make sure data is valid
    check(myUpdatedProfile, Meteor.users.simpleSchema());

    Meteor.users.update(myId, myUpdatedProfile);
  }
});
