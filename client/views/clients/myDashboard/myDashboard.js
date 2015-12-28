Template.myDashboard.helpers({
  //Check if the user is currently logging in
  isLoggingIn() {
    return Meteor.loggingIn();
  },
  
  //Get the active template clicked on
  activeTemplate() {
    return Session.get("myClickedButton");
  }
});

Template.myDashboard.events({
  "click .myClickedButton" (event) {
    //Set the active template to load on the dashboard for the client
    let clickedButton = event.target.id;
    Session.set("myClickedButton", clickedButton);
  }
});
