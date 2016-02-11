Template.layout.helpers({
  //Check if the user is currently logging in
  isLoggingIn() {
    return Meteor.loggingIn();
  }
});
