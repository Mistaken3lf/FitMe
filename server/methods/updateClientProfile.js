Meteor.methods({
  updateClientFirstName: function (profileId, profileItem) {
    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    check(profileItem, String);
    Meteor.users.update({_id: profileId}, {$set: { 'profile.firstName': profileItem }});
  },

  updateClientLastName: function (profileId, profileItem) {
    if(!Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    check(profileItem, String);
    Meteor.users.update({_id: profileId}, {$set: { 'profile.lastName': profileItem }});
  }
});
