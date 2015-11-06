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
  }
})