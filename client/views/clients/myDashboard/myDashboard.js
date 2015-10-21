Template.myDashboard.onRendered(function () {
  //Activate the tabs on the dashboard
  $('ul.tabs').tabs();
});

Template.myDashboard.helpers({
  //Check if the user is currently logging in
  isLoggingIn: function() {
    return Meteor.loggingIn();
  }
});