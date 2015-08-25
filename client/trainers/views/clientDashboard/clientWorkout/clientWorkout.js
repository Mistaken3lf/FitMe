//Run when the workout template is created
Template.clientWorkout.onCreated(function () {
  var self = this;

  //Subscribe to the current clients workout based on url param
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsWorkout", clientId);
  });
});

//Run when the workout template is rendered
Template.clientWorkout.onRendered(function () {
  //Pop up a datepicker
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 225, // Creates a dropdown of 25 years to control year
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

//Helper functions for the workout template
Template.clientWorkout.helpers({
  //Get the current clients workout based on url param
  currentClientsWorkout: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsWorkout = ClientWorkout.findOne({whosWorkout: clientId});
    return currentClientsWorkout;
  },
});
