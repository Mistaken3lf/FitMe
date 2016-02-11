Template.clientDashboard.onCreated(function () {
  //Subscribe to the clients profile based on the url param
  this.autorun(() => {
    const clientId = FlowRouter.getParam('_id');
    this.subscribe("currentClientsProfile", clientId);
  });
});

Template.clientDashboard.helpers({
  //Check if the user is currently logging in
  isLoggingIn() {
    return Meteor.loggingIn();
  },
  
  //Get template to load from dashboard
  activeTemplate() {
    return Session.get("clickedButton");
  },
  
  //Get the current clients profile based on the url param
  myClient() {
    const clientId = FlowRouter.getParam('_id');
    const myClient = Meteor.users.findOne({
      whosProfile: clientId
    });
    
    return myClient;
  },
});

Template.clientDashboard.events({
  "click .clickedButton" (event) {
    //Set the active template based on button clicked on dashboard
    let clickedButton = event.target.id;
    Session.set("clickedButton", clickedButton);
  }
});
