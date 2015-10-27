Template.clientDashboard.helpers({
  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  },
  
  activeTemplate: function () {
    return Session.get("clickedButton");
  }
});

Template.clientDashboard.events({
  "click .clickedButton": function (event) {
    var clickedButton = event.target.id;
    Session.set("clickedButton", clickedButton);
    console.log(clickedButton);
  }
});
