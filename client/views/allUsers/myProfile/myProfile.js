Template.myProfile.onCreated(function () {
  var self = this;

  self.autorun(function () {
    //Subscribe to my profile info
    self.subscribe("myProfile");
  });
});

Template.myProfileShell.onRendered(function () {
  //Pop up a datepicker if a date field is clicked on
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 225,
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

Template.myProfileShell.helpers({
  //Get the currently logged in user to be used to display their
  //profile on the myProfile template
  loggedInUser: function () {
    return Meteor.user();
  },
});
