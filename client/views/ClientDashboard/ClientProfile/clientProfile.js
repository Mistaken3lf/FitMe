Template.clientProfile.onRendered(function () {
  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
});

Template.clientProfile.helpers({
  clientUsername: function() {
    return this.username;
  },

  clientFirstName: function() {
    return this.profile.firstName;
  },

  clientLastName: function() {
    return this.profile.lastName;
  },

  clientEmail: function() {
    return this.users.emails[0].address;
  }
});
