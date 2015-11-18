Template.adminDashboard.onCreated(function () {
  var self = this;

  //Subscribe to all trainers
  self.autorun(function () {
    var trainerId = FlowRouter.getParam('_id');
    self.subscribe("currentTrainer", trainerId);
  });
});

Template.adminDashboard.helpers({
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
  
  activeTemplate: function () {
    return Session.get("adminClickedButton");
  }
});

Template.adminDashboard.events({
  "click .adminClickedButton": function (event) {
    var clickedButton = event.target.id;
    Session.set("adminClickedButton", clickedButton);
  }
});