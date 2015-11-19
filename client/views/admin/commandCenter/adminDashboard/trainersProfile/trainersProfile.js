Template.trainersProfile.onCreated(function () {
  var self = this;

  self.autorun(function () {
    var trainerId = FlowRouter.getParam('_id');
    self.subscribe("trainersProfile", trainerId);
  });
});

Template.trainersProfile.onRendered(function () {
  //Pop up a datepicker if a date field is clicked on
  $('#birthday').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
});

Template.trainersProfile.helpers({
  //Check if the user is currently logging in
  isLoggingIn: function () {
    return Meteor.loggingIn();
  },

  currentTrainer: function () {
    var trainerId = FlowRouter.getParam('_id');
    return Meteor.users.findOne({
      _id: trainerId
    });
  }
});
