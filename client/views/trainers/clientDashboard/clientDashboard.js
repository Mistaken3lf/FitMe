Template.clientDashboard.onRendered(function () {
  //Activate the dashboard tabs
  $('.collapsible').collapsible({
    accordion: false
  });
});

Template.clientDashboard.helpers({
  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  }
});
