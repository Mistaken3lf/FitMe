Template.clientWorkout.onCreated(function () {
  var self = this;
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsWorkout", clientId);
  });
});

Template.clientWorkout.onRendered(function () {
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 225, // Creates a dropdown of 25 years to control year
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

Template.clientWorkout.helpers({
  currentClientsWorkout: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsWorkout = ClientWorkout.findOne({whosWorkout: clientId});
    return currentClientsWorkout;
  },
});
