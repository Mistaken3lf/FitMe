Template.clientProfile.onRendered(function () {
  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
});


Template.clientProfile.events({
  'keyup [name=clientProfileFirstName]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileFirstName", profileId, profileItem);
  },

  'keyup [name=clientProfileLastName]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileLastName", profileId, profileItem);
  },

  'keyup [name=clientProfileBirthday]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileBirthday", profileId, profileItem);
  },

  'keyup [name=clientProfileAddress]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileAddress", profileId, profileItem);
  },

  'keyup [name=clientProfileCity]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileCity", profileId, profileItem);
  },

  'keyup [name=clientProfileState]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileState", profileId, profileItem);
  },

  'keyup [name=clientProfileZip]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileZip", profileId, profileItem);
  },

  'keyup [name=clientProfileHomePhone]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileHomePhone", profileId, profileItem);
  },

  'keyup [name=clientProfileWorkPhone]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileWorkPhone", profileId, profileItem);
  },

  'keyup [name=clientProfileEmergencyContact]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileEmergencyContact", profileId, profileItem);
  },

  'keyup [name=clientEmail]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientEmail", profileId, profileItem);
  },

  'keyup [name=clientProfileBio]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileBio", profileId, profileItem);
  },

  'keyup [name=clientProfileFitnessGoals]': function(event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientProfileFitnessGoals", profileId, profileItem);
  },
});
