//Run when the cardio template is created
Template.clientCardio.onCreated(function () {
  var self = this;

  //Subscribe to the current clients cardio publication when
  //the cardio template is created
  self.autorun(function () {
    var clientId = FlowRouter.getParam('_id');
    self.subscribe("currentClientsCardio", clientId);
  });
});

//Run when the cardio template is rendered on the page
Template.clientCardio.onRendered(function () {
  //Pop up date picker
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 225, // Creates a dropdown of 25 years to control year
    autoclose: true,
    format: "yyyy-mm-dd",
  });
});

//Helper functions for the cardio template
Template.clientCardio.helpers({
  //Find clients cardio based on url param
  currentClientsCardio: function () {
    var clientId = FlowRouter.getParam('_id');
    var currentClientsCardio = ClientCardio.findOne({whosCardio: clientId});

    //Return current clients cardio to use as the doc for autoform
    return currentClientsCardio;
  },
});
