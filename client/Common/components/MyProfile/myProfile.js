Template.myProfile.onCreated(function () {
  this.autorun(() => {
    //Subscribe to my profile info
    this.subscribe("myProfile");
  });
});

Template.myProfileShell.onRendered(() => {
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
  loggedInUser() {
    return Meteor.user();
  },

  //Check if the user is currently logging in
  isLoggingIn() {
    return Meteor.loggingIn();
  }
});
