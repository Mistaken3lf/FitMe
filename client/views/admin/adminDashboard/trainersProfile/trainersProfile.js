Template.trainersProfile.onCreated(function () {
  var self = this;

  self.autorun(function () {
    var trainerId = FlowRouter.getParam('_id');
    self.subscribe("trainersProfile", trainerId);
  });
});

Template.trainersProfileShell.onRendered(function () {
  //Pop up a datepicker if a date field is clicked on
  $('#birthday').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
});

Template.trainersProfileShell.helpers({
  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  },
  
  //Get the currently logged in trainer to display their
  //info in the form
  currentTrainer: function () {
    var trainerId = FlowRouter.getParam('_id');
    return Meteor.users.findOne({
      _id: trainerId
    });
  }
});
