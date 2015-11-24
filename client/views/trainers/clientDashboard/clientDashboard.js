Template.clientDashboard.onCreated(function () {
  var self = this;

  //Subscribe to the clients profile based on the url param
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsProfile", clientId);
  });
});

Template.clientDashboard.helpers({
  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  },
  
  //Get template to load from dashboard
  activeTemplate: function () {
    return Session.get("clickedButton");
  },
  
  //Get the current clients profile based on the url param
  myClient: function () {
    var clientId = FlowRouter.getParam('_id');
    var myClient = Meteor.users.findOne({
      'userProfile.whosProfile': clientId
    });
    return myClient;
  },
});

Template.clientDashboard.events({
  "click .clickedButton": function (event) {
    //Set the active template based on button clicked on dashboard
    var clickedButton = event.target.id;
    Session.set("clickedButton", clickedButton);
  }
});
