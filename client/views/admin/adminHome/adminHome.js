Template.adminHome.helpers({
  //Check if the user is logging in 
  isLoggingIn() {
    return Meteor.loggingIn();
  }
});