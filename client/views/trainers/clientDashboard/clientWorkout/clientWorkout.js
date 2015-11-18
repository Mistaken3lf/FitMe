Template.clientWorkout.onCreated(function () {
  var self = this;
  //Subscribe to the current clients workout based on url param
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsWorkout", clientId);
  });
});

Template.clientWorkoutShell.onRendered(function () {
  //Pop up a datepicker when a date field is clicked
  $('#workoutDate').datetimepicker({
    timepicker: false,
    format: "MM/DD/YYYY",
    startDate: new Date(),
    scrollInput: false
  });
});

Template.clientWorkoutShell.helpers({
  //Get the current clients workout based on url param
  currentClientsWorkout: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsWorkout = ClientWorkout.findOne({
      whosWorkout: clientId
    });
    return currentClientsWorkout;
  }
});
