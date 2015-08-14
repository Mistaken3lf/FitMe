Template.clientProfile.onRendered(function () {
  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
});

Template.clientProfile.events({
  'keyup [name=profileFirstName]': function (event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientFirstName", profileId, profileItem);
  },

  'keyup [name=profileLastName]': function (event) {
    var profileId = this._id;
    var profileItem = $(event.target).val();
    Meteor.call("updateClientLastName", profileId, profileItem);
  },
});
