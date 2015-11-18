Template.myProfile.onCreated(function () {
  var self = this;

  self.autorun(function () {
    //Subscribe to my profile info
    self.subscribe("myProfile");
  });
});

Template.myProfileShell.onRendered(function () {
  //Pop up a datepicker if a date field is clicked on
  $('#birthday').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
});

Template.myProfileShell.helpers({
  //Get the currently logged in user to be used to display their
  //profile on the myProfile template
  loggedInUser: function () {
    return Meteor.user();
  },

  //Check if the user is currently logging in
  isLoggingIn: function() {
    return Meteor.loggingIn();
  }
});
