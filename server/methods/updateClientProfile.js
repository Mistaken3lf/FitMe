Meteor.methods({
  updateClientProfileFirstName:function(profileId, profileItem){
     Meteor.users.update({_id: profileId}, {$set: {'profile.firstName': profileItem}});
  },

  updateClientProfileLastName:function(profileId, profileItem){
     Meteor.users.update({_id: profileId}, {$set: {'profile.lastName': profileItem}});
  },

  updateClientProfileBirthday:function(profileId, profileItem){
     Meteor.users.update({_id: profileId}, {$set: {'profile.birthday': profileItem}});
  },

  updateClientProfileAddress:function(profileId, profileItem){
     Meteor.users.update({_id: profileId}, {$set: {'profile.address': profileItem}});
  },

  updateClientProfileCity:function(profileId, profileItem){
     Meteor.users.update({_id: profileId}, {$set: {'profile.city': profileItem}});
  },

  updateClientProfileState:function(profileId, profileItem){
     Meteor.users.update({_id: profileId}, {$set: {'profile.state': profileItem}});
  },

  updateClientProfileZip:function(profileId, profileItem){
     Meteor.users.update({_id: profileId}, {$set: {'profile.zip': profileItem}});
  },

  updateClientProfileHomePhone:function(profileId, profileItem){
     Meteor.users.update({_id: profileId}, {$set: {'profile.homePhone': profileItem}});
  },

  updateClientProfileWorkPhone:function(profileId, profileItem){
     Meteor.users.update({_id: profileId}, {$set: {'profile.workPhone': profileItem}});
  },

  updateClientProfileEmergencyContact:function(profileId, profileItem){
     Meteor.users.update({_id: profileId}, {$set: {'profile.emergencyContact': profileItem}});
  },

  updateClientEmail:function(profileId, profileItem){
     Meteor.users.update({_id: profileId}, {$set:{"emails":[{address: profileItem}]}});
  },

  updateClientProfileBio:function(profileId, profileItem){
     Meteor.users.update({_id: profileId}, {$set: {'profile.bio': profileItem}});
  },

  updateClientProfileFitnessGoals:function(profileId, profileItem){
     Meteor.users.update({_id: profileId}, {$set: {'profile.fitnessGoals': profileItem}});
  },
});
