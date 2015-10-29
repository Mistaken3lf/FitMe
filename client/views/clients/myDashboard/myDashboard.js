Template.myDashboard.helpers({
  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  },
  
  activeTemplate: function () {
    return Session.get("myClickedButton");
  }
});

Template.myDashboard.events({
  "click .myClickedButton": function (event) {
    var clickedButton = event.target.id;
    Session.set("myClickedButton", clickedButton);
    console.log(clickedButton);
  }
});
