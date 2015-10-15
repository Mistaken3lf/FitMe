Template.layout.helpers({
  //Check if the user is currently logging in
  isLoggingIn: function() {
    return Meteor.loggingIn();
  }
});
