Template.adminHome.helpers({
  //Check if the user is logging in 
  isLoggingIn: function () {
    return Meteor.loggingIn();
  }
});