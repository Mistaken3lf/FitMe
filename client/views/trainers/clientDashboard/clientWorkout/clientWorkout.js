Template.clientWorkout.onCreated(function () {
  //Subscribe to the current clients workout based on url param
  this.autorun(() => {
    const clientId = FlowRouter.getParam('_id');
    this.subscribe("currentClientsWorkout", clientId);
  });
});

Template.clientWorkoutShell.onRendered(() => {
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
  currentClientsWorkout() {
    const clientId = FlowRouter.getParam('_id');
    const currentClientsWorkout = ClientWorkout.findOne({
      whosWorkout: clientId
    });
    
    return currentClientsWorkout;
  }
});
