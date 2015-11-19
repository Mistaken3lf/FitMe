Template.adminDashboard.onCreated(function () {
  var self = this;

  //Subscribe to all trainers
  self.autorun(function () {
    var trainerId = FlowRouter.getParam('_id');
    self.subscribe("currentTrainer", trainerId);
  });
});

Template.adminDashboard.helpers({
  //Get currently clicked on trainer
  currentTrainer: function () {
    var trainerId = FlowRouter.getParam('_id');
    var currentTrainer = Meteor.users.findOne({
      _id: trainerId
    });

    return currentTrainer;
  },

  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  },
  
  //Check which template is currently used
  activeTemplate: function () {
    return Session.get("adminClickedButton");
  }
});

Template.adminDashboard.events({
  //Set the clicked on template based on which button is clicked
  "click .adminClickedButton": function (event) {
    var clickedButton = event.target.id;
    Session.set("adminClickedButton", clickedButton);
  }
});