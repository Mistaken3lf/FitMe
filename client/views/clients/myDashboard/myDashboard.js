Template.myDashboard.helpers({
  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  },
  
  //Get the active template clicked on
  activeTemplate: function () {
    return Session.get("myClickedButton");
  }
});

Template.myDashboard.events({
  "click .myClickedButton": function (event) {
    //Set the active template to load on the dashboard for the client
    var clickedButton = event.target.id;
    Session.set("myClickedButton", clickedButton);
    console.log(clickedButton);
  }
});
